import { cookies } from "next/headers";

// Minimal gate for the internal LinkedIn tool: a shared ADMIN_TOKEN held in an
// httpOnly cookie. Enough for a 2-person team; the OAuth consent + signed state
// are the real guards on the posting power.
export const ADMIN_COOKIE = "ovc_admin";

export async function isAdmin(): Promise<boolean> {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return false;
  const c = await cookies();
  return c.get(ADMIN_COOKIE)?.value === token;
}
