// Step 4 of 4 — AUTONOMY. Cron trigger, every 15 minutes (the free-plan minimum).
// The agent wakes up without being asked, checks its own list, and messages you first.
import { dueReminders, markSent } from "./memory.ts";
import { sendTelegram } from "./telegram.ts";

export default async function () {
  const due = await dueReminders();
  for (const r of due) {
    await sendTelegram(r.chat_id, `Reminder: ${r.text}`);
    await markSent(r.id);
  }
  return `Sent ${due.length} reminder(s) at ${new Date().toISOString()}`;
}
