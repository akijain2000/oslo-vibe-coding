// HTTP trigger. Telegram POSTs every message here. One request = one turn of the agent.
// Setup: add TELEGRAM_BOT_TOKEN to environment variables, then open this val's URL with ?setup once (see README).
import { runAgent, type Message } from "./agent.ts";
import { openDataTools, toolSchemas } from "./tools.ts";
import { history, saveMessage, memoryTools, memorySchemas } from "./memory.ts";
import { callModel } from "./model.ts";

const TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
const tg = (method: string) => `https://api.telegram.org/bot${TOKEN}/${method}`;

export async function sendTelegram(chatId: string, text: string) {
  await fetch(tg("sendMessage"), {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

const SYSTEM = (now: string) => `You are a personal assistant for someone living in Oslo. Today is ${now} (Europe/Oslo).
Be brief and concrete. Plain text only: no markdown, no asterisks, no headings (Telegram shows them literally).
Use tools when they help: live departures, weather, memory, reminders.
When the user tells you something about themselves (home stop, habits), store it with remember.
For "should I leave now?" questions, check departures and weather, then give ONE recommendation and a time to leave.`;

export default async function (req: Request): Promise<Response> {
  const url = new URL(req.url);
  const selfUrl = url.origin + url.pathname;

  if (!TOKEN) return new Response("Missing TELEGRAM_BOT_TOKEN. Add it under Environment variables, then reload.", { status: 500 });

  // One-time setup: open this val's URL with ?setup in a browser. The val tells Telegram
  // "send every message for my bot to this URL". No token ever leaves the server.
  if (req.method === "GET" && url.searchParams.has("setup")) {
    const result = await fetch(`${tg("setWebhook")}?url=${encodeURIComponent(selfUrl)}`).then((r) => r.json());
    return Response.json({ webhook: selfUrl, telegram: result }, { status: result.ok ? 200 : 500 });
  }
  // Debugging: ?status shows what Telegram thinks the webhook is and any recent delivery error.
  if (req.method === "GET" && url.searchParams.has("status")) {
    return Response.json(await fetch(tg("getWebhookInfo")).then((r) => r.json()));
  }
  if (req.method !== "POST") {
    return new Response("Oslo assistant is running.\nOpen this URL with ?setup once to connect Telegram, then talk to the bot in Telegram.\nOpen it with ?status to check the connection.");
  }
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
