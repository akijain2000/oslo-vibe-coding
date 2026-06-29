import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { authorizeUrl } from "@/lib/linkedin";
import { signState, FOUNDERS } from "@/lib/linkedin-store";

export const runtime = "nodejs";

// Starts the OAuth consent flow for one founder. Admin-gated.
export async function GET(req: Request) {
  if (!(await isAdmin())) return NextResponse.redirect(new URL("/connect-linkedin", req.url));
  const who = new URL(req.url).searchParams.get("who") || "";
  if (!FOUNDERS.some((f) => f.id === who)) return new NextResponse("unknown founder", { status: 400 });
  const state = signState({ who, ts: Date.now() });
  return NextResponse.redirect(authorizeUrl(state));
}
