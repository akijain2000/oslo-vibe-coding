// Step 1 of 4 — THE MODEL. No API key needed: Val.town's built-in proxy serves gpt-5.4-nano to free accounts.
// Set OPENROUTER_API_KEY in your val's environment variables to switch to OpenRouter's free models instead.
import { OpenAI as ValTownOpenAI } from "https://esm.town/v/std/openai/main.ts";
import OpenAI from "npm:openai";
import type { CallModel, Message } from "./agent.ts";

const openrouterKey = Deno.env.get("OPENROUTER_API_KEY");
const client = openrouterKey
  ? new OpenAI({ baseURL: "https://openrouter.ai/api/v1", apiKey: openrouterKey })
  : new ValTownOpenAI();
export const MODEL = openrouterKey ? "openrouter/free" : "gpt-5.4-nano";

export const callModel: CallModel = async (messages: Message[], tools: any[]) => {
  const completion = await client.chat.completions.create({ model: MODEL, messages: messages as any, tools: tools.length ? tools : undefined });
  return completion.choices[0].message as Message;
};
