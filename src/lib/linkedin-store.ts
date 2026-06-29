import crypto from "node:crypto";
import { Redis } from "@upstash/redis";

// Storage + crypto for the LinkedIn auto-poster. Access tokens are encrypted at
// rest (AES-256-GCM); the queue and tokens live in Upstash Redis. Env-driven, so
// importing this module never connects until a request actually calls in.

export const FOUNDERS = [
  { id: "akshat", name: "Akshat Jain" },
  { id: "harsh", name: "Harsh Trivedi" },
] as const;
export type FounderId = (typeof FOUNDERS)[number]["id"];

let _redis: Redis | null = null;
function redis(): Redis {
  if (!_redis) _redis = Redis.fromEnv(); // UPSTASH_REDIS_REST_URL + _TOKEN
  return _redis;
}

/* ---------- crypto ---------- */

function key(): Buffer {
  const hex = process.env.TOKEN_ENCRYPTION_KEY || "";
  const buf = Buffer.from(hex, "hex");
  if (buf.length !== 32) throw new Error("TOKEN_ENCRYPTION_KEY must be 32 bytes of hex (64 hex chars)");
  return buf;
}

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key(), iv);
  const enc = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);
  return Buffer.concat([iv, cipher.getAuthTag(), enc]).toString("base64");
}

export function decrypt(b64: string): string {
  const data = Buffer.from(b64, "base64");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key(), data.subarray(0, 12));
  decipher.setAuthTag(data.subarray(12, 28));
  return Buffer.concat([decipher.update(data.subarray(28)), decipher.final()]).toString("utf8");
}

/* ---------- signed OAuth state (CSRF guard) ---------- */

function hmac(data: string): string {
  return crypto.createHmac("sha256", process.env.ADMIN_TOKEN || "").update(data).digest("base64url");
}
export function signState(payload: object): string {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${data}.${hmac(data)}`;
}
export function verifyState<T>(state: string): T | null {
  const [data, sig] = (state || "").split(".");
  if (!data || !sig || !crypto.timingSafeEqual(Buffer.from(hmac(data)), Buffer.from(sig))) return null;
  try {
    return JSON.parse(Buffer.from(data, "base64url").toString("utf8")) as T;
  } catch {
    return null;
  }
}

/* ---------- tokens ---------- */

export type StoredToken = { urn: string; name: string; accessTokenEnc: string; expiresAt: number };

export async function setToken(id: FounderId, t: { urn: string; name: string; accessToken: string; expiresAt: number }) {
  const stored: StoredToken = { urn: t.urn, name: t.name, accessTokenEnc: encrypt(t.accessToken), expiresAt: t.expiresAt };
  await redis().set(`li:token:${id}`, stored);
}

export async function getToken(id: FounderId): Promise<StoredToken | null> {
  return (await redis().get<StoredToken>(`li:token:${id}`)) ?? null;
}

export type TokenStatus = { id: FounderId; name: string; connected: boolean; daysLeft: number | null; urn?: string };

export async function tokenStatuses(): Promise<TokenStatus[]> {
  const out: TokenStatus[] = [];
  for (const f of FOUNDERS) {
    const t = await getToken(f.id);
    out.push({
      id: f.id,
      name: f.name,
      connected: !!t,
      daysLeft: t ? Math.floor((t.expiresAt - Date.now()) / 86_400_000) : null,
      urn: t?.urn,
    });
  }
  return out;
}

/* ---------- post queue ---------- */

export type QueuedPost = {
  id: string;
  who: FounderId;
  text: string;
  imageUrl?: string;
  imageAlt?: string;
  publishAt: string; // ISO
  status: "queued" | "posted" | "failed";
  error?: string;
  postUrn?: string;
  createdAt: string;
};

export async function addQueued(p: Omit<QueuedPost, "id" | "status" | "createdAt">): Promise<QueuedPost> {
  const post: QueuedPost = { ...p, id: crypto.randomUUID(), status: "queued", createdAt: new Date().toISOString() };
  await redis().hset("li:queue", { [post.id]: post });
  return post;
}

export async function listQueue(): Promise<QueuedPost[]> {
  const all = (await redis().hgetall<Record<string, QueuedPost>>("li:queue")) ?? {};
  return Object.values(all).sort((a, b) => a.publishAt.localeCompare(b.publishAt));
}

export async function updateQueued(id: string, patch: Partial<QueuedPost>) {
  const all = (await redis().hgetall<Record<string, QueuedPost>>("li:queue")) ?? {};
  const current = all[id];
  if (!current) return;
  await redis().hset("li:queue", { [id]: { ...current, ...patch } });
}

export async function removeQueued(id: string) {
  await redis().hdel("li:queue", id);
}
