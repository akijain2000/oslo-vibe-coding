# LinkedIn auto-poster — setup

Posts the weekly content to the **founders' personal LinkedIn profiles** on a
schedule. Personal posting is self-serve (no LinkedIn review). Company-page
posting is **not** automated (it needs a vetted legal-entity partner approval);
re-share a personal post to the page manually, or use LinkedIn's native page
scheduler.

**The one ongoing chore:** free-tier LinkedIn tokens last ~60 days and cannot be
refreshed automatically, so each founder must click **Reconnect** on
`/connect-linkedin` about every two months. The dashboard shows the days left.

---

## What you set up (one time)

### 1. LinkedIn Developer app
1. Go to https://developer.linkedin.com → **Create app**. Associate it with the
   Oslo Vibe Coding company page. The app name must not contain "Linked" or "In".
2. **Products** tab → add **"Share on LinkedIn"** and **"Sign In with LinkedIn
   using OpenID Connect"** (both are self-serve, approved instantly).
3. **Auth** tab → add the redirect URL exactly:
   `https://oslovibecoding.tech/api/linkedin/callback`
4. Copy the **Client ID** and **Client Secret**.

### 2. Upstash Redis (free) — stores the tokens + the queue
1. Create a database at https://upstash.com (or via Vercel → Storage →
   Marketplace → Upstash). The free tier is plenty.
2. Copy **`UPSTASH_REDIS_REST_URL`** and **`UPSTASH_REDIS_REST_TOKEN`**.

### 3. Generate the secrets
```
openssl rand -hex 32   # TOKEN_ENCRYPTION_KEY (must be 32 bytes / 64 hex chars)
openssl rand -hex 24   # ADMIN_TOKEN
openssl rand -hex 24   # CRON_SECRET
```

### 4. Set the env vars in Vercel (Project → Settings → Environment Variables)
| Variable | Value |
|---|---|
| `LINKEDIN_CLIENT_ID` | from step 1 |
| `LINKEDIN_CLIENT_SECRET` | from step 1 |
| `LINKEDIN_REDIRECT_URI` | `https://oslovibecoding.tech/api/linkedin/callback` |
| `LINKEDIN_API_VERSION` | `202606` (bump ~yearly; LinkedIn sunsets old versions) |
| `UPSTASH_REDIS_REST_URL` | from step 2 |
| `UPSTASH_REDIS_REST_TOKEN` | from step 2 |
| `TOKEN_ENCRYPTION_KEY` | 64-hex-char key from step 3 |
| `ADMIN_TOKEN` | the dashboard password from step 3 |
| `CRON_SECRET` | from step 3 (Vercel sends this to the cron automatically) |

Redeploy after setting them.

### 5. Connect each founder
1. Open `https://oslovibecoding.tech/connect-linkedin`, enter `ADMIN_TOKEN`.
2. Click **Connect LinkedIn** for each founder. Each person logs into their own
   LinkedIn and approves. Done.

---

## Using it
- On `/connect-linkedin`, write the post text, pick the founder, set a publish
  time, optionally paste an image URL (e.g. a brand-kit PNG hosted under
  `/public`), and **Add to queue**.
- The daily cron (`0 7 * * *` UTC, see `vercel.json`) publishes anything whose
  publish time has passed.
- Reconnect when a founder's token gets close to expiry (the card turns amber).

## What it can post
Text, a single image, and (text) links. Documents/PDF carousels and multi-image
are a straightforward next step (same upload shape); video and true swipeable
carousels are out of scope (video is heavy, swipeable carousels are ads-only).

## Limits / notes
- Rate cap is 150 requests per member per day. One weekly post is invisible.
- Keep it to genuine, human-approved posts. Browser automation / scraping / auto-
  DM would violate LinkedIn's terms; first-party API posting is the sanctioned path.
- `/connect-linkedin` and all `/api/linkedin/*` and `/api/admin/*` routes are
  `noindex` and gated by `ADMIN_TOKEN` (the cron is gated by `CRON_SECRET`).
