import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { addQueued, removeQueued, FOUNDERS, type FounderId } from "@/lib/linkedin-store";

export const runtime = "nodejs";

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
    await addQueued({ who, text, imageUrl, publishAt: new Date(publishAt).toISOString() });
    return NextResponse.redirect(back, { status: 303 });
  } catch (e) {
    console.error("[linkedin/queue] failed", e);
    back.searchParams.set("error", "queue");
    return NextResponse.redirect(back, { status: 303 });
  }
}
