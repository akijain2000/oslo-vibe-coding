import { NextResponse } from "next/server";
import { listQueue, updateQueued, getToken, decrypt } from "@/lib/linkedin-store";
import { createPost } from "@/lib/linkedin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Daily Vercel cron (see vercel.json). Publishes every queued post whose
// publishAt has passed. LinkedIn has no scheduled state, so this IS the schedule.
export async function GET(req: Request) {
  // Fail closed: an unset CRON_SECRET must NOT open this publish endpoint to the
  // public (Vercel does not inject it automatically). Require it, always.
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return new NextResponse("unauthorized", { status: 401 });
  }

  const now = Date.now();
  const due = (await listQueue()).filter(
    (p) => p.status === "queued" && new Date(p.publishAt).getTime() <= now,
  );

  const results: { id: string; ok: boolean; postUrn?: string; error?: string }[] = [];
  for (const p of due) {
    try {
      const t = await getToken(p.who);
      if (!t) throw new Error("founder not connected");
      if (t.expiresAt <= now) throw new Error("token expired, reconnect needed");
      const accessToken = decrypt(t.accessTokenEnc);
      const postUrn = await createPost(accessToken, {
        authorUrn: t.urn,
        text: p.text,
        imageUrl: p.imageUrl,
        imageAlt: p.imageAlt,
      });
      await updateQueued(p.id, { status: "posted", postUrn });
      results.push({ id: p.id, ok: true, postUrn });
    } catch (e) {
      const error = String(e instanceof Error ? e.message : e).slice(0, 300);
      await updateQueued(p.id, { status: "failed", error });
      console.error(`[cron/linkedin-publish] post ${p.id} failed:`, error);
      results.push({ id: p.id, ok: false, error });
    }
  }
  console.log(`[cron/linkedin-publish] due=${due.length} posted=${results.filter((r) => r.ok).length}`);
  return NextResponse.json({ ran: new Date().toISOString(), due: due.length, results });
}
