import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/admin";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") || "");
  const token = process.env.ADMIN_TOKEN || "";
  const url = new URL("/connect-linkedin", req.url);
  if (token && password === token) {
    const c = await cookies();
    c.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  } else {
    url.searchParams.set("error", "auth");
  }
  return NextResponse.redirect(url, { status: 303 });
}
