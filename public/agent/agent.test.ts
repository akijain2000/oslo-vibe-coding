// Run: node --test agent.test.ts   (Node 22.18+ / 24 runs TypeScript directly)
import { test } from "node:test";
import assert from "node:assert/strict";
import { runAgent, type Message } from "./agent.ts";

const toolCall = (name: string, args: object, id = "c1"): Message => ({
  role: "assistant", content: null,
  tool_calls: [{ id, type: "function", function: { name, arguments: JSON.stringify(args) } }],
});
const tools = { oslo_weather: async () => "12°C, dry" };

test("tool call, then final answer", async () => {
  const script = [toolCall("oslo_weather", { hours: 3 }), { role: "assistant", content: "Dry and 12°C. Walk." } as Message];
  const r = await runAgent({ messages: [{ role: "user", content: "Should I walk?" }], tools, schemas: [], callModel: async () => script.shift()! });
  assert.equal(r.reply, "Dry and 12°C. Walk.");
  assert.deepEqual(r.toolCalls.map((t) => t.name), ["oslo_weather"]);
  assert.equal(r.messages.filter((m) => m.role === "tool")[0].content, "12°C, dry");
});

test("unknown tool is reported back to the model, not thrown", async () => {
  const script = [toolCall("teleport", {}), { role: "assistant", content: "ok" } as Message];
  const r = await runAgent({ messages: [], tools, schemas: [], callModel: async () => script.shift()! });
  assert.match(r.toolCalls[0].result, /Unknown tool/);
});

test("budget: stops after maxToolCalls and says so", async () => {
  let n = 0;
  const r = await runAgent({ messages: [], tools, schemas: [], maxToolCalls: 3, callModel: async () => { n++; return toolCall("oslo_weather", {}, `c${n}`); } });
  assert.equal(r.toolCalls.length, 3);
  assert.equal(n, 4); // 3 rounds with tools + the 4th answer that still wanted a tool
  assert.match(r.reply, /could not finish within 3 tool calls/);
});
