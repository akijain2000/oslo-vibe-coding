// Step 3 of 4 — MEMORY. Val.town gives every val its own SQLite database (10 MB on the free plan).
// Three tables: what was said, what you asked it to remember, and reminders for the cron.
// Note the /main.ts on the import: without it you get the legacy account-wide database instead,
// and the SQLite page of this val will show "No tables yet".
import { sqlite } from "https://esm.town/v/std/sqlite/main.ts";

await sqlite.batch([
  `CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, chat_id TEXT, role TEXT, content TEXT, created_at TEXT DEFAULT (datetime('now')))`,
  `CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, chat_id TEXT, note TEXT, created_at TEXT DEFAULT (datetime('now')))`,
  `CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY, chat_id TEXT, due_at TEXT, text TEXT, sent INTEGER DEFAULT 0)`,
]);

// libsql returns rows as arrays plus a columns list; turn them into plain objects.
function rows(result: any): any[] {
  const { columns, rows } = result;
  return rows.map((r: any) => (Array.isArray(r) ? Object.fromEntries(columns.map((c: string, i: number) => [c, r[i]])) : r));
}

export async function history(chatId: string, limit = 20) {
  const r = await sqlite.execute({ sql: `SELECT role, content FROM messages WHERE chat_id = ? ORDER BY id DESC LIMIT ?`, args: [chatId, limit] });
  return rows(r).reverse().map((m) => ({ role: m.role, content: m.content }));
}
export async function saveMessage(chatId: string, role: string, content: string) {
  await sqlite.execute({ sql: `INSERT INTO messages (chat_id, role, content) VALUES (?, ?, ?)`, args: [chatId, role, content] });
}
export async function remember(chatId: string, note: string) {
  await sqlite.execute({ sql: `INSERT INTO notes (chat_id, note) VALUES (?, ?)`, args: [chatId, note] });
  return `Remembered: ${note}`;
}
export async function recall(chatId: string) {
  const r = await sqlite.execute({ sql: `SELECT note, created_at FROM notes WHERE chat_id = ? ORDER BY id DESC LIMIT 30`, args: [chatId] });
  const notes = rows(r);
  return notes.length ? notes.map((n) => `- ${n.note} (${n.created_at})`).join("\n") : "Nothing remembered yet.";
}
export async function setReminder(chatId: string, dueAtIso: string, text: string) {
  if (Number.isNaN(Date.parse(dueAtIso))) return `I need a real date and time, got "${dueAtIso}".`;
  await sqlite.execute({ sql: `INSERT INTO reminders (chat_id, due_at, text) VALUES (?, ?, ?)`, args: [chatId, new Date(dueAtIso).toISOString(), text] });
  return `Reminder set for ${new Date(dueAtIso).toLocaleString("en-GB", { timeZone: "Europe/Oslo" })}: ${text}`;
}
export async function dueReminders() {
  const r = await sqlite.execute({ sql: `SELECT id, chat_id, text FROM reminders WHERE sent = 0 AND due_at <= ?`, args: [new Date().toISOString()] });
  return rows(r);
}
export async function markSent(id: number) {
  await sqlite.execute({ sql: `UPDATE reminders SET sent = 1 WHERE id = ?`, args: [id] });
}

// The memory tools the model can call. They need the chat id, so we build them per request.
export function memoryTools(chatId: string) {
  return {
    remember: (a: any) => remember(chatId, a.note),
    recall: () => recall(chatId),
    set_reminder: (a: any) => setReminder(chatId, a.due_at, a.text),
  };
}
export const memorySchemas = [
  { type: "function", function: { name: "remember", description: "Store a fact about the user for later, e.g. their home stop or a preference.", parameters: { type: "object", properties: { note: { type: "string" } }, required: ["note"] } } },
  { type: "function", function: { name: "recall", description: "List everything remembered about this user.", parameters: { type: "object", properties: {} } } },
  { type: "function", function: { name: "set_reminder", description: "Schedule a message to the user at a future time. due_at must be an ISO 8601 datetime with timezone, e.g. 2026-09-11T07:45:00+02:00.", parameters: { type: "object", properties: { due_at: { type: "string" }, text: { type: "string" } }, required: ["due_at", "text"] } } },
];
