// The agent LOOP, in 40 lines. This is the part worth reading.
// Ask model -> if it wants a tool, run it and go round again -> stop when it answers or the budget is spent.
// No Val.town imports here either, so it is unit-testable with a fake model.

export type Message = { role: "system" | "user" | "assistant" | "tool"; content: string | null; tool_calls?: any[]; tool_call_id?: string; name?: string };
export type ToolFn = (args: any) => Promise<string>;
export type CallModel = (messages: Message[], tools: any[]) => Promise<Message>;

export type AgentResult = { reply: string; toolCalls: { name: string; args: any; result: string }[]; messages: Message[] };

export async function runAgent(opts: {
  messages: Message[];          // system + history + the new user message
  tools: Record<string, ToolFn>; // name -> function
  schemas: any[];               // what the model is told about the tools
  callModel: CallModel;         // the model, injected so tests can fake it
  maxToolCalls?: number;        // the guardrail: autonomy without a stop is an expensive while-loop
}): Promise<AgentResult> {
  const budget = opts.maxToolCalls ?? 5;
  const messages = [...opts.messages];
  const log: AgentResult["toolCalls"] = [];

  for (let round = 0; round <= budget; round++) {
    const answer = await opts.callModel(messages, opts.schemas);
    messages.push(answer);
    const wanted = answer.tool_calls ?? [];
    if (wanted.length === 0) return { reply: answer.content ?? "", toolCalls: log, messages }; // done

    if (round === budget) break; // budget spent: fall through to the honest exit below

    for (const call of wanted) {
      const name = call.function.name;
      let args: any = {};
      try { args = JSON.parse(call.function.arguments || "{}"); } catch { /* keep {} */ }
      const fn = opts.tools[name];
      const result = fn ? await fn(args).catch((e) => `Tool error: ${e.message}`) : `Unknown tool: ${name}`;
      log.push({ name, args, result });
      messages.push({ role: "tool", tool_call_id: call.id, name, content: result });
    }
  }
  const tried = log.map((t) => t.name).join(", ") || "nothing";
  return { reply: `I could not finish within ${budget} tool calls. I tried: ${tried}.`, toolCalls: log, messages };
}
