import { NextResponse } from "next/server";
import { exchangeCode, fetchPersonUrn } from "@/lib/linkedin";
import { verifyState, setToken, FOUNDERS, type FounderId } from "@/lib/linkedin-store";

export const runtime = "nodejs";

// OAuth redirect target. The signed `state` is the CSRF guard, so no admin cookie
// is required here. Exchanges the code, reads the member's URN, stores the token.
export async function GET(req: Request) {
  const sp = new URL(req.url).searchParams;
  const code = sp.get("code");
  const state = sp.get("state") || "";
  const dash = new URL("/connect-linkedin", req.url);

  if (sp.get("error") || !code) {
    dash.searchParams.set("error", "oauth");
    return NextResponse.redirect(dash);
  }
  const parsed = verifyState<{ who: FounderId; ts: number }>(state);
  if (!parsed || !FOUNDERS.some((f) => f.id === parsed.who)) {
    dash.searchParams.set("error", "state");
    return NextResponse.redirect(dash);
  }
  try {
    const tok = await exchangeCode(code);
    const { urn, name } = await fetchPersonUrn(tok.access_token);
    await setToken(parsed.who, {
      urn,
      name,
      accessToken: tok.access_token,
      expiresAt: Date.now() + tok.expires_in * 1000,
    });
    dash.searchParams.set("connected", parsed.who);
  } catch {
    dash.searchParams.set("error", "exchange");
  }
  return NextResponse.redirect(dash);
}
