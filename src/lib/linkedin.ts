// LinkedIn API client for posting to a member's own profile (Share on LinkedIn,
// w_member_social). Self-serve, no partner review. All secrets come from env at
// call time; nothing here is hardcoded. See docs/LINKEDIN_AUTOMATION_SETUP.md.

const AUTHORIZE_URL = "https://www.linkedin.com/oauth/v2/authorization";
const TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken";
const USERINFO_URL = "https://api.linkedin.com/v2/userinfo";
const REST = "https://api.linkedin.com/rest";

// Scopes: OIDC (to read the member's id) + w_member_social (to post as them).
export const LINKEDIN_SCOPES = "openid profile email w_member_social";

function version() {
  return process.env.LINKEDIN_API_VERSION || "202606";
}

function headers(accessToken: string): Record<string, string> {
  return {
    Authorization: `Bearer ${accessToken}`,
    "X-Restli-Protocol-Version": "2.0.0",
    "LinkedIn-Version": version(),
    "Content-Type": "application/json",
  };
}

export function authorizeUrl(state: string): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.LINKEDIN_CLIENT_ID || "",
    redirect_uri: process.env.LINKEDIN_REDIRECT_URI || "",
    scope: LINKEDIN_SCOPES,
    state,
  });
  return `${AUTHORIZE_URL}?${params.toString()}`;
}

export type TokenResponse = { access_token: string; expires_in: number };

export async function exchangeCode(code: string): Promise<TokenResponse> {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.LINKEDIN_REDIRECT_URI || "",
    client_id: process.env.LINKEDIN_CLIENT_ID || "",
    client_secret: process.env.LINKEDIN_CLIENT_SECRET || "",
  });
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`token exchange failed: ${res.status} ${await res.text()}`);
  return (await res.json()) as TokenResponse;
}

// The post `author` must be the member's Person URN, derived from the OIDC `sub`.
export async function fetchPersonUrn(accessToken: string): Promise<{ urn: string; name: string }> {
  const res = await fetch(USERINFO_URL, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!res.ok) throw new Error(`userinfo failed: ${res.status} ${await res.text()}`);
  const info = (await res.json()) as { sub: string; name?: string };
  return { urn: `urn:li:person:${info.sub}`, name: info.name ?? "" };
}

// The Posts API "commentary" is Little Text: these characters must be escaped.
export function escapeCommentary(text: string): string {
  return text.replace(/([\\<>#~_|{}()@[\]*])/g, "\\$1");
}

async function uploadImage(accessToken: string, authorUrn: string, imageUrl: string): Promise<string> {
  // 1. initialize upload -> get a target uploadUrl + the image URN
  const initRes = await fetch(`${REST}/images?action=initializeUpload`, {
    method: "POST",
    headers: headers(accessToken),
    body: JSON.stringify({ initializeUploadRequest: { owner: authorUrn } }),
  });
  if (!initRes.ok) throw new Error(`image init failed: ${initRes.status} ${await initRes.text()}`);
  const init = (await initRes.json()) as { value: { uploadUrl: string; image: string } };

  // 2. fetch the source bytes and PUT them to the upload URL (with the bearer token)
  const bytes = await fetch(imageUrl).then((r) => {
    if (!r.ok) throw new Error(`could not fetch image ${imageUrl}: ${r.status}`);
    return r.arrayBuffer();
  });
  const putRes = await fetch(init.value.uploadUrl, {
    method: "PUT",
    headers: { Authorization: `Bearer ${accessToken}` },
    body: Buffer.from(bytes),
  });
  if (!putRes.ok) throw new Error(`image upload failed: ${putRes.status} ${await putRes.text()}`);
  return init.value.image;
}

export type CreatePost = { authorUrn: string; text: string; imageUrl?: string; imageAlt?: string };

// Publishes immediately (LinkedIn has no scheduled state). Returns the post URN.
export async function createPost(accessToken: string, post: CreatePost): Promise<string> {
  const body: Record<string, unknown> = {
    author: post.authorUrn,
    commentary: escapeCommentary(post.text),
    visibility: "PUBLIC",
    distribution: { feedDistribution: "MAIN_FEED", targetEntities: [], thirdPartyDistributionChannels: [] },
    lifecycleState: "PUBLISHED",
    isReshareDisabledByAuthor: false,
  };
  if (post.imageUrl) {
    const imageUrn = await uploadImage(accessToken, post.authorUrn, post.imageUrl);
    body.content = { media: { id: imageUrn, altText: post.imageAlt || "Oslo Vibe Coding" } };
  }
  const res = await fetch(`${REST}/posts`, { method: "POST", headers: headers(accessToken), body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`post failed: ${res.status} ${await res.text()}`);
  return res.headers.get("x-restli-id") ?? "posted";
}
