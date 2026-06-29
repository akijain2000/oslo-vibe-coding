import type { Metadata } from "next";
import { isAdmin } from "@/lib/admin";
import { tokenStatuses, listQueue, FOUNDERS, type TokenStatus, type QueuedPost } from "@/lib/linkedin-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "LinkedIn auto-poster",
  robots: { index: false, follow: false },
};

const input = "mt-1 w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-ink";
const label = "block font-mono text-xs uppercase tracking-wider text-ink-faint";

function Login({ error }: { error?: string }) {
  return (
    <div className="mx-auto max-w-sm px-5 py-32">
      <h1 className="font-display text-2xl font-bold">LinkedIn auto-poster</h1>
      <p className="mt-2 text-sm text-ink-soft">Internal tool. Enter the admin password.</p>
      {error === "auth" && <p className="mt-3 text-sm text-ember-ink">Wrong password.</p>}
      <form action="/api/admin/login" method="post" className="mt-6">
        <label className={label}>
          Password
          <input name="password" type="password" autoComplete="off" className={input} />
        </label>
        <button className="mt-4 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-paper">Sign in</button>
      </form>
    </div>
  );
}

function Status({ s }: { s: TokenStatus }) {
  const soon = s.connected && s.daysLeft !== null && s.daysLeft <= 10;
  return (
    <div className="rounded-card border border-line bg-mist p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="font-display font-semibold text-ink">{s.name}</span>
        <span className={`font-mono text-xs ${s.connected ? (soon ? "text-ember-ink" : "text-ink-faint") : "text-ember-ink"}`}>
          {s.connected ? `connected · ${s.daysLeft}d left` : "not connected"}
        </span>
      </div>
      {soon && <p className="mt-2 text-xs text-ember-ink">Token expires soon. Reconnect to keep posting.</p>}
      <a
        href={`/api/linkedin/connect?who=${s.id}`}
        className="mt-3 inline-block rounded-pill bg-ink px-4 py-2 text-xs font-semibold text-paper"
      >
        {s.connected ? "Reconnect" : "Connect LinkedIn"}
      </a>
    </div>
  );
}

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const sp = await searchParams;
  if (!(await isAdmin())) return <Login error={sp.error} />;

  let statuses: TokenStatus[] = [];
  let queue: QueuedPost[] = [];
  let configError = false;
  try {
    statuses = await tokenStatuses();
    queue = await listQueue();
  } catch {
    configError = true;
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <h1 className="font-display text-3xl font-bold tracking-tight">LinkedIn auto-poster</h1>
      <p className="mt-2 text-ink-soft">Queue posts to the founders&apos; profiles. The daily cron publishes whatever is due.</p>

      {sp.connected && <p className="mt-4 rounded-xl bg-ember/10 px-4 py-2 text-sm text-ember-ink">Connected {sp.connected}.</p>}
      {sp.error && sp.error !== "auth" && (
        <p className="mt-4 rounded-xl bg-ember/10 px-4 py-2 text-sm text-ember-ink">Something went wrong ({sp.error}). Check the logs.</p>
      )}
      {configError && (
        <p className="mt-4 rounded-xl border border-line bg-mist px-4 py-3 text-sm text-ink-soft">
          Storage is not configured yet. Set the Upstash + LinkedIn env vars (see docs/LINKEDIN_AUTOMATION_SETUP.md), then reload.
        </p>
      )}

      <h2 className="mt-12 font-display text-lg font-semibold">Connections</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {(statuses.length ? statuses : FOUNDERS.map((f) => ({ id: f.id, name: f.name, connected: false, daysLeft: null }))).map(
          (s) => (
            <Status key={s.id} s={s as TokenStatus} />
          ),
        )}
      </div>

      <h2 className="mt-12 font-display text-lg font-semibold">Queue a post</h2>
      <form action="/api/linkedin/queue" method="post" className="mt-4 grid gap-4 rounded-card border border-line bg-mist p-5 sm:grid-cols-2">
        <label className={label}>
          Post as
          <select name="who" className={input}>
            {FOUNDERS.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          Publish at
          <input name="publishAt" type="datetime-local" required className={input} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          Text
          <textarea name="text" rows={5} maxLength={2900} required className={input} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          Image URL (optional)
          <input name="imageUrl" type="url" placeholder="https://oslovibecoding.tech/..." className={input} />
        </label>
        <div className="sm:col-span-2">
          <button className="rounded-pill bg-ember px-5 py-2.5 text-sm font-semibold text-white">Add to queue</button>
        </div>
      </form>

      <h2 className="mt-12 font-display text-lg font-semibold">Queued ({queue.length})</h2>
      <ul className="mt-4 divide-y divide-line border-t border-line">
        {queue.map((p) => (
          <li key={p.id} className="flex items-start justify-between gap-4 py-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                <span>{p.who}</span>
                <span aria-hidden>·</span>
                <span>{new Date(p.publishAt).toLocaleString()}</span>
                <span aria-hidden>·</span>
                <span className={p.status === "failed" ? "text-ember-ink" : p.status === "posted" ? "text-ink-soft" : "text-ember-ink"}>
                  {p.status}
                </span>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{p.text}</p>
              {p.error && <p className="mt-1 text-xs text-ember-ink">{p.error}</p>}
            </div>
            <form action="/api/linkedin/queue" method="post" className="shrink-0">
              <input type="hidden" name="action" value="delete" />
              <input type="hidden" name="id" value={p.id} />
              <button className="rounded-pill border border-line px-3 py-1.5 font-mono text-xs text-ink-soft">Delete</button>
            </form>
          </li>
        ))}
        {queue.length === 0 && <li className="py-4 text-sm text-ink-faint">Nothing queued.</li>}
      </ul>
    </div>
  );
}
