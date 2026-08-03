# scripts

## `create-luma-event.mjs` — create a session on Luma via the API

Creates an Oslo Vibe Coding event on Luma through the [public Luma API](https://docs.luma.com/reference/post_v1-events-create), so the weekly "next session" flow can post the RSVP event instead of doing it by hand.

Zero dependencies (Node 24's built-in `fetch` + `parseArgs`).

### One-time setup

1. The calendar needs an active **Luma Plus** subscription.
2. Create an API key at <https://luma.com/calendar/manage/api-keys> (keys are scoped to one calendar).
3. Make the key available to the script — **never** put it on the command line or in git:
   - either export it: `export LUMA_API_KEY=secret_...`
   - or add it to `.env.local` in the repo root (this file is gitignored):
     ```
     LUMA_API_KEY=secret_...
     ```

Sanity-check the key with `curl -H "x-luma-api-key: $LUMA_API_KEY" https://public-api.luma.com/v1/users/get-self`.

### Usage

Preview the payload without creating anything (no key needed):

```bash
npm run luma:create -- \
  --name "Vibe Coding Drop-In" \
  --start "2026-07-09T16:00:00+02:00" \
  --end   "2026-07-09T18:00:00+02:00" \
  --venue "Spaces Stortorvet" \
  --address "Stortorvet 7, 0155 Oslo" \
  --slug "ovc-2026-07-09" \
  --description "Bring a laptop and whatever you're building. Beginners welcome." \
  --dry-run
```

Drop `--dry-run` to actually create it. On success it prints `{ id, url }`; the RSVP link is `https://lu.ma/<slug>` for the `--slug` you pass. Run `node scripts/create-luma-event.mjs --help` for all flags.

**Always pass `--slug`** (a date-based one like `ovc-2026-07-09`): it makes the RSVP URL known up front, so it can go straight into `src/content/events.ts` as `rsvpUrl`. The create response only returns an `id`, not a URL.

### First real run

Luma has no sandbox. Before trusting it in the automated flow, create one throwaway event named e.g. `Test — ignore` with a `test-...` slug, confirm the returned `https://lu.ma/test-...` opens the event correctly, then delete it from the Luma dashboard.

### Where it fits

The Saturday routine `ovc-weekly-session-plan` (see `~/.claude/scheduled-tasks/`) uses this: once Akshat confirms next week's date/time/venue, it creates the Luma event, then writes the returned RSVP link into `src/content/events.ts`. If `LUMA_API_KEY` is not set or the call fails, the routine falls back to asking Akshat for the Luma link manually.

## `make-linkedin-poster.mjs` — the weekly LinkedIn poster

Generates the Wednesday Drop-In poster as 1080×1350 LinkedIn-portrait PNGs (rendered at 2× = 2160×2700), in the site's Night Spark and Daylight looks. The layouts are the 4:5 adaptation of the poster maker's templates (`src/components/poster/templates.tsx`), with the brand tokens from `BRAND.md`.

No new dependencies: the QR comes from the site's existing `qrcode` package, and rendering uses your installed Chrome/Chromium in headless screenshot mode (auto-detected; override with `--chrome` or `CHROME_BIN`).

### Usage

The weekly run is just:

```bash
npm run poster:linkedin
```

Everything defaults to the evergreen standing session — "Every Wednesday", 16:00–18:00, Spaces Stortorvet, canonical brand copy, and the standing Luma RSVP link baked into the QR — so the same PNG can be reposted week after week. Output lands in `posters/` (gitignored).

Override any field when something changes:

```bash
npm run poster:linkedin -- --luma https://luma.com/xxxxxxxx     # new RSVP link
npm run poster:linkedin -- --date "Wednesday 12 August"         # dated special edition
npm run poster:linkedin -- --time "17:00–19:00"                 # different time
npm run poster:linkedin -- --template night                     # just one variant
```

Run `node scripts/make-linkedin-poster.mjs --help` for all flags. The standing defaults (Luma link, time, venue, copy) live in the `DEFAULTS` block at the top of the script — edit there if the routine itself changes.

### Where it fits

The weekly flow is: create the Luma event (`luma:create` or by hand) → if the RSVP link changed, update `DEFAULTS.luma` (and `src/content/events.ts`) → `npm run poster:linkedin` → post the PNG on LinkedIn.
