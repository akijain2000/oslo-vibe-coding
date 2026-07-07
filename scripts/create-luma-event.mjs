#!/usr/bin/env node
// Create an Oslo Vibe Coding event on Luma via the public API.
//
// Zero dependencies: Node 24 has global fetch + node:util parseArgs. Run with
//   node scripts/create-luma-event.mjs --name "..." --start "..." [flags]
// or `npm run luma:create -- --name "..." --start "..."`.
//
// The Luma API key is a SECRET and is never passed on the command line. Set it
// in the environment as LUMA_API_KEY, or put `LUMA_API_KEY=...` in .env.local
// (which is gitignored). --dry-run needs no key: it prints the exact payload
// so you can eyeball it before creating anything real.
//
// Docs: https://docs.luma.com/reference/post_v1-events-create
//   POST https://public-api.luma.com/v1/events/create
//   header: x-luma-api-key
//   required: name, start_at (ISO 8601), timezone (IANA)
//   returns: { id }  — the public URL is https://lu.ma/<slug> for the slug you pass.

import { parseArgs } from "node:util";
import fs from "node:fs";
import path from "node:path";

const API_URL = "https://public-api.luma.com/v1/events/create";
const REPO_ROOT = path.resolve(import.meta.dirname, "..");

const USAGE = `
Create a Luma event for Oslo Vibe Coding.

Usage:
  node scripts/create-luma-event.mjs --name "Vibe Coding Drop-In" \\
    --start "2026-07-09T16:00:00+02:00" --end "2026-07-09T18:00:00+02:00" \\
    --venue "Spaces Stortorvet" --address "Stortorvet 7, 0155 Oslo" \\
    --slug "ovc-2026-07-09" --description "Bring a laptop and an idea." [--dry-run]

Required:
  --name          Event title
  --start         Start time, ISO 8601 with offset (e.g. 2026-07-09T16:00:00+02:00)

Optional:
  --end           End time, ISO 8601 with offset
  --timezone      IANA timezone (default: Europe/Oslo)
  --venue         Venue name (prefixed onto the address)
  --address       Street address; sets a public manual location on the event
  --slug          Custom Luma URL path -> https://lu.ma/<slug>. Use a date-based
                  slug (e.g. ovc-2026-07-09) so the RSVP link is known up front.
  --description   Markdown event description
  --visibility    public | members-only | private (default: public)
  --dry-run       Print the payload and derived URL; do NOT call the API (no key needed)
  --help          Show this help

Auth: set LUMA_API_KEY in the environment or in .env.local (gitignored).
`;

function loadApiKey() {
  if (process.env.LUMA_API_KEY && process.env.LUMA_API_KEY.trim()) {
    return process.env.LUMA_API_KEY.trim();
  }
  const envPath = path.join(REPO_ROOT, ".env.local");
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
      const m = line.match(/^\s*LUMA_API_KEY\s*=\s*(.*)\s*$/);
      if (m) return m[1].replace(/^["']|["']$/g, "").trim();
    }
  }
  return null;
}

function fail(msg) {
  console.error(`Error: ${msg}\n`);
  console.error("Run with --help for usage.");
  process.exit(1);
}

const { values } = parseArgs({
  options: {
    name: { type: "string" },
    start: { type: "string" },
    end: { type: "string" },
    timezone: { type: "string" },
    venue: { type: "string" },
    address: { type: "string" },
    slug: { type: "string" },
    description: { type: "string" },
    visibility: { type: "string" },
    "dry-run": { type: "boolean" },
    help: { type: "boolean" },
  },
  allowPositionals: false,
});

if (values.help) {
  console.log(USAGE);
  process.exit(0);
}

if (!values.name) fail("--name is required.");
if (!values.start) fail("--start is required (ISO 8601, e.g. 2026-07-09T16:00:00+02:00).");
if (Number.isNaN(Date.parse(values.start))) fail(`--start is not a valid ISO 8601 datetime: ${values.start}`);
if (values.end && Number.isNaN(Date.parse(values.end))) fail(`--end is not a valid ISO 8601 datetime: ${values.end}`);

const visibility = values.visibility ?? "public";
if (!["public", "members-only", "private"].includes(visibility)) {
  fail(`--visibility must be public, members-only, or private (got: ${visibility}).`);
}

// Build the request payload.
const payload = {
  name: values.name,
  start_at: values.start,
  timezone: values.timezone ?? "Europe/Oslo",
  visibility,
};
if (values.end) payload.end_at = values.end;
if (values.slug) payload.slug = values.slug;
if (values.description) payload.description_md = values.description;

const fullAddress = [values.venue, values.address].filter(Boolean).join(", ");
if (fullAddress) {
  payload.geo_address_json = { type: "manual", address: fullAddress };
  payload.location_visibility = "public";
}

const derivedUrl = values.slug ? `https://lu.ma/${values.slug}` : null;

// --dry-run: show what would be sent, never touch the network.
if (values["dry-run"]) {
  console.log("DRY RUN — no request sent.\n");
  console.log("POST " + API_URL);
  console.log("Payload:");
  console.log(JSON.stringify(payload, null, 2));
  console.log("\nDerived public URL: " + (derivedUrl ?? "(pass --slug to get a deterministic lu.ma URL)"));
  process.exit(0);
}

const apiKey = loadApiKey();
if (!apiKey) {
  fail("LUMA_API_KEY is not set. Export it or add it to .env.local. (Use --dry-run to preview without a key.)");
}

if (!values.slug) {
  console.warn(
    "Warning: no --slug given. Luma will auto-generate one; the create response only returns an id, " +
      "so you'll need to open the event in Luma to copy its URL. Pass --slug for a known lu.ma/<slug> link.\n",
  );
}

const res = await fetch(API_URL, {
  method: "POST",
  headers: { "x-luma-api-key": apiKey, "content-type": "application/json" },
  body: JSON.stringify(payload),
});

const bodyText = await res.text();

// Never silently swallow a non-2xx — surface status + body so failures are loud.
if (!res.ok) {
  console.error(`Luma API error ${res.status} ${res.statusText}`);
  console.error(bodyText || "(empty body)");
  process.exit(1);
}

let data;
try {
  data = JSON.parse(bodyText);
} catch {
  data = { raw: bodyText };
}

const result = {
  id: data.id ?? data.api_id ?? null,
  url: derivedUrl,
  response: data,
};

console.log(JSON.stringify(result, null, 2));
if (derivedUrl) console.log("\nRSVP link: " + derivedUrl);
