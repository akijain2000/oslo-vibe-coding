// HTTP trigger. Telegram POSTs every message here. One request = one turn of the agent.
// Setup: add TELEGRAM_BOT_TOKEN to environment variables, then point Telegram at this val's URL (see README).
import { runAgent, type Message } from "./agent.ts";
import { openDataTools, toolSchemas } from "./tools.ts";
import { history, saveMessage, memoryTools, memorySchemas } from "./memory.ts";
import { callModel } from "./model.ts";

const TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;

export async function sendTelegram(chatId: string, text: string) {
  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

const SYSTEM = (now: string) => `You are a personal assistant for someone living in Oslo. Today is ${now} (Europe/Oslo).
Be brief and concrete. Use tools when they help: live departures, weather, memory, reminders.
When the user tells you something about themselves (home stop, habits), store it with remember.
For "should I leave now?" questions, check departures and weather, then give ONE recommendation and a time to leave.`;

export default async function (req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Oslo assistant is running. Talk to it on Telegram.");
  const update = await req.json();
  const msg = update.message ?? update.edited_message;
  if (!msg?.text) return new Response("ok");
  const chatId = String(msg.chat.id);

  await saveMessage(chatId, "user", msg.text);
  const now = new Date().toLocaleString("en-GB", { timeZone: "Europe/Oslo", dateStyle: "full", timeStyle: "short" });
  const messages: Message[] = [{ role: "system", content: SYSTEM(now) }, ...(await history(chatId)) as Message[]];

  const result = await runAgent({
    messages,
    tools: { ...openDataTools, ...memoryTools(chatId) },
    schemas: [...toolSchemas, ...memorySchemas],
    callModel,
    maxToolCalls: 5,
  });

  await saveMessage(chatId, "assistant", result.reply);
  await sendTelegram(chatId, result.reply || "(no answer)");
  return new Response("ok"); // Telegram only needs a 200
}
