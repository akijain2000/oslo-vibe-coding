import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { addQueued, removeQueued, FOUNDERS, type FounderId } from "@/lib/linkedin-store";

export const runtime = "nodejs";

// <input type="datetime-local"> submits a naive "YYYY-MM-DDTHH:mm" with no zone.
// The founders pick Oslo wall-clock time, so interpret it as Europe/Oslo (DST and
// all) and store the corresponding UTC instant. Vercel runs UTC, so `new Date(x)`
// alone would treat the string as UTC and schedule posts 1-2 hours off.
function osloLocalToUtcIso(local: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(local);
  if (!m) return new Date(local).toISOString();
  const [y, mo, d, h, mi] = [m[1], m[2], m[3], m[4], m[5]].map(Number);
  const asUtc = Date.UTC(y, mo - 1, d, h, mi);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Oslo",
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(new Date(asUtc));
  const g: Record<string, string> = {};
  for (const p of parts) g[p.type] = p.value;
  const shownAsUtc = Date.UTC(+g.year, +g.month - 1, +g.day, +g.hour, +g.minute);
  const offset = shownAsUtc - asUtc; // ms Oslo is ahead of UTC at that instant
  return new Date(asUtc - offset).toISOString();
}

// Add or delete a queued post. Admin-gated. The dashboard reads the queue itself.
export async function POST(req: Request) {
  if (!(await isAdmin())) return new NextResponse("unauthorized", { status: 401 });
  const back = new URL("/connect-linkedin", req.url);
  try {
    const form = await req.formData();
    if (String(form.get("action")) === "delete") {
      await removeQueued(String(form.get("id") || ""));
      return NextResponse.redirect(back, { status: 303 });
    }
    const who = String(form.get("who") || "") as FounderId;
    const text = String(form.get("text") || "").trim();
    const imageUrl = String(form.get("imageUrl") || "").trim() || undefined;
    const publishAt = String(form.get("publishAt") || "");
    if (!FOUNDERS.some((f) => f.id === who) || !text || !publishAt) {
      back.searchParams.set("error", "form");
      return NextResponse.redirect(back, { status: 303 });
    }
    await addQueued({ who, text, imageUrl, publishAt: osloLocalToUtcIso(publishAt) });
    return NextResponse.redirect(back, { status: 303 });
  } catch (e) {
    console.error("[linkedin/queue] failed", e);
    back.searchParams.set("error", "queue");
    return NextResponse.redirect(back, { status: 303 });
  }
}
