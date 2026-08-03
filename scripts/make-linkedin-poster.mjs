#!/usr/bin/env node
// Generate the weekly LinkedIn poster (1080x1350 portrait) for the Wednesday Drop-In.
//
// The layouts are the LinkedIn 4:5 adaptation of the site's poster templates
// (src/components/poster/templates.tsx) — Night Spark and Daylight — using the
// exact brand tokens from BRAND.md. Everything defaults to the standing weekly
// session, so the usual run is just:
//
//   npm run poster:linkedin
//
// which renders the evergreen poster — "Every Wednesday", 16:00–18:00, Spaces
// Stortorvet, QR on the standing Luma link — so the same PNG can be posted week
// after week. Override any field for a special edition:
//
//   npm run poster:linkedin -- --luma https://luma.com/xxxxxxxx
//   npm run poster:linkedin -- --date "Wednesday 12 August" --time "17:00–19:00"
//
// Rendering uses your installed Chrome/Chromium in headless screenshot mode, so
// there are no new npm dependencies (the QR comes from the site's existing
// `qrcode` package). Output lands in posters/ (gitignored).

import { parseArgs } from "node:util";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import QRCode from "qrcode";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

// ---- Standing weekly defaults (edit here if the routine itself changes) ------

const DEFAULTS = {
  luma: "https://luma.com/izommzs4",
  date: "Every Wednesday",
  time: "16:00–18:00",
  venue: "Spaces Stortorvet",
  address: "Stortorvet 7, 0155 Oslo",
  title: "Vibe Coding Drop-In",
  eyebrow: "Free · Drop-in · Oslo",
  tagline: "No one codes alone. Bring a laptop and an idea.",
  footer: "Free · Beginners welcome · Join us on WhatsApp",
  out: "posters",
};

// Brand tokens, mirroring BRAND.md / src/app/globals.css.
const C = {
  night: "#110f17",
  nightLine: "#2e2a39",
  ink: "#16151c",
  paper: "#fbf7f0",
  line: "#e7ddcd",
  ember: "#ff5a2c",
  emberInk: "#d83c12",
  glow: "#ff7a4d",
  cream: "#d9d2c6",
  faint: "#8a8694",
  body: "#4b4956",
};

const SPARK_PATH =
  "M12 1.5c.9 5.4 4.2 8.7 9.6 9.6v1.8c-5.4.9-8.7 4.2-9.6 9.6h-1.8c-.9-5.4-4.2-8.7-9.6-9.6v-1.8c5.4-.9 8.7-4.2 9.6-9.6h1.8Z";

const USAGE = `
Generate the weekly LinkedIn poster (1080x1350) for Oslo Vibe Coding.

Usage:
  npm run poster:linkedin                        # evergreen weekly poster, all defaults
  npm run poster:linkedin -- --luma <url>        # new RSVP link (changes the QR)
  npm run poster:linkedin -- --date "Wednesday 12 August" --time "17:00–19:00"

Optional flags (all default to the standing weekly session):
  --luma       RSVP URL the QR points at        (default: ${DEFAULTS.luma})
  --date       Date label                       (default: "${DEFAULTS.date}")
  --time       Time label                       (default: ${DEFAULTS.time})
  --venue      Venue name                       (default: ${DEFAULTS.venue})
  --address    Street address                   (default: ${DEFAULTS.address})
  --title      Poster headline                  (default: ${DEFAULTS.title})
  --eyebrow    Top chip label                   (default: ${DEFAULTS.eyebrow})
  --tagline    Line under the headline          (default: ${DEFAULTS.tagline})
  --footer     Footer note                      (default: ${DEFAULTS.footer})
  --template   night | daylight | both          (default: both)
  --out        Output directory                 (default: ${DEFAULTS.out}/)
  --chrome     Path to a Chrome/Chromium binary (default: auto-detect, or $CHROME_BIN)
  --help       Show this help
`;

// ---- CLI --------------------------------------------------------------------

const { values } = parseArgs({
  options: {
    luma: { type: "string" },
    date: { type: "string" },
    time: { type: "string" },
    venue: { type: "string" },
    address: { type: "string" },
    title: { type: "string" },
    eyebrow: { type: "string" },
    tagline: { type: "string" },
    footer: { type: "string" },
    template: { type: "string" },
    out: { type: "string" },
    chrome: { type: "string" },
    help: { type: "boolean" },
  },
  allowPositionals: false,
});

if (values.help) {
  console.log(USAGE);
  process.exit(0);
}

function fail(msg) {
  console.error(`Error: ${msg}\n`);
  console.error("Run with --help for usage.");
  process.exit(1);
}

const data = {
  luma: values.luma ?? DEFAULTS.luma,
  dateLabel: values.date ?? DEFAULTS.date,
  timeLabel: values.time ?? DEFAULTS.time,
  venue: values.venue ?? DEFAULTS.venue,
  address: values.address ?? DEFAULTS.address,
  title: values.title ?? DEFAULTS.title,
  eyebrow: values.eyebrow ?? DEFAULTS.eyebrow,
  tagline: values.tagline ?? DEFAULTS.tagline,
  footer: values.footer ?? DEFAULTS.footer,
};
data.rsvpLabel = data.luma.replace(/^https?:\/\//, "").replace(/\/$/, "");

const templateChoice = values.template ?? "both";
if (!["night", "daylight", "both"].includes(templateChoice)) {
  fail(`--template must be night, daylight, or both (got: ${templateChoice}).`);
}
const templates = templateChoice === "both" ? ["night", "daylight"] : [templateChoice];

// ---- Chrome discovery -------------------------------------------------------

function findChrome() {
  if (values.chrome) return values.chrome;
  if (process.env.CHROME_BIN && process.env.CHROME_BIN.trim()) return process.env.CHROME_BIN.trim();
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) {
    fail(
      "No Chrome/Chromium found. Install Chrome, or point at a binary with --chrome or CHROME_BIN.",
    );
  }
  return found;
}

// ---- Poster markup ----------------------------------------------------------

const spark = (size, fill) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}"><path d="${SPARK_PATH}"/></svg>`;

// The title breaks after "Coding" on the canonical two-line lockup; keep other
// titles on their natural wrap.
const titleHtml = data.title === "Vibe Coding Drop-In" ? "Vibe Coding<br/>Drop-In" : data.title;

function details(labelC, valueC, subC) {
  const rows = [
    { k: "When", v: data.dateLabel },
    { k: "Time", v: data.timeLabel },
    { k: "Where", v: data.venue, sub: data.address },
  ];
  return `<div style="display:flex;flex-direction:column;gap:38px;">${rows
    .map(
      (r) => `<div>
        <div style="font-size:22px;letter-spacing:3px;text-transform:uppercase;color:${labelC};font-family:'Geist Mono',monospace;">${r.k}</div>
        <div style="font-size:50px;font-weight:700;margin-top:8px;line-height:1.05;color:${valueC};font-family:'Space Grotesk',sans-serif;">${r.v}</div>
        ${r.sub ? `<div style="font-size:30px;color:${subC};margin-top:4px;">${r.sub}</div>` : ""}
      </div>`,
    )
    .join("")}</div>`;
}

function wordmark(color, accent) {
  return `<div style="display:flex;align-items:center;gap:16px;">
    ${spark(44, C.ember)}
    <span style="font-size:32px;font-weight:700;letter-spacing:-0.5px;color:${color};">Oslo <span style="color:${accent};">Vibe</span> Coding</span>
  </div>`;
}

function chip(borderC, bg, textC) {
  return `<div style="display:inline-flex;align-items:center;gap:13px;border:1px solid ${borderC};background:${bg};border-radius:999px;padding:12px 24px;font-size:21px;letter-spacing:4px;text-transform:uppercase;color:${textC};font-family:'Geist Mono',monospace;">
    <span style="width:11px;height:11px;border-radius:999px;background:${C.ember};"></span>${data.eyebrow}
  </div>`;
}

function qrBlock(qrDataUrl, frameBg, scanC, labelC, imgRadius = "0") {
  return `<div>
    <div style="background:${frameBg};border-radius:26px;padding:20px;display:flex;">
      <img src="${qrDataUrl}" width="300" height="300" style="display:block;width:300px;height:300px;border-radius:${imgRadius};"/>
    </div>
    <div style="text-align:center;">
      <div style="margin-top:16px;font-size:28px;font-weight:700;color:${scanC};">Scan to RSVP</div>
      <div style="margin-top:4px;font-size:22px;color:${labelC};">${data.rsvpLabel}</div>
    </div>
  </div>`;
}

function footerBar(borderC, textC, subC) {
  return `<div style="position:absolute;left:72px;right:72px;bottom:34px;border-top:1px solid ${borderC};padding-top:20px;display:flex;justify-content:space-between;gap:24px;font-size:22px;color:${subC};">
    <span style="color:${textC};">${data.footer}</span><span>oslovibecoding.tech</span>
  </div>`;
}

function poster(variant, qrDataUrl) {
  const dark = variant === "night";
  const bg = dark
    ? `background:${C.night};background-image:radial-gradient(680px circle at 86% 4%, rgba(255,90,44,0.42), transparent 58%), radial-gradient(560px circle at 8% 98%, rgba(255,176,32,0.22), transparent 60%);`
    : `background:${C.paper};background-image:radial-gradient(560px circle at 92% 2%, rgba(255,90,44,0.16), transparent 60%);`;
  return `<div style="width:1080px;height:1350px;position:relative;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;padding:72px;color:${dark ? C.paper : C.ink};${bg}font-family:'Space Grotesk',sans-serif;">
    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        ${dark ? wordmark(C.paper, C.glow) : wordmark(C.ink, C.emberInk)}
        ${dark ? chip(C.nightLine, "rgba(255,255,255,0.05)", C.cream) : chip(C.line, "#fff", C.ink)}
      </div>
      <h1 style="margin:64px 0 0;font-size:152px;font-weight:800;line-height:0.97;letter-spacing:-3px;max-width:900px;">${titleHtml}</h1>
      <div style="margin-top:30px;height:6px;width:122px;border-radius:999px;background:${C.ember};"></div>
      <p style="margin:30px 0 0;font-size:38px;line-height:1.4;color:${dark ? C.cream : C.body};max-width:936px;">${data.tagline}</p>
    </div>
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:48px;padding-bottom:78px;">
      ${dark ? details(C.faint, C.paper, C.cream) : details(C.faint, C.ink, C.body)}
      ${dark ? qrBlock(qrDataUrl, "#fff", C.glow, C.cream) : qrBlock(qrDataUrl, C.ink, C.emberInk, C.body, "8px")}
    </div>
    ${dark ? footerBar(C.nightLine, C.cream, C.faint) : footerBar(C.line, C.body, C.faint)}
  </div>`;
}

function page(variant, qrDataUrl) {
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;800&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box;}</style>
</head><body>${poster(variant, qrDataUrl)}</body></html>`;
}

// ---- Render -----------------------------------------------------------------

const chrome = findChrome();
const qrDataUrl = await QRCode.toDataURL(data.luma, {
  margin: 1,
  width: 600,
  color: { dark: C.ink, light: "#ffffff" },
});

const outDir = path.resolve(REPO_ROOT, values.out ?? DEFAULTS.out);
fs.mkdirSync(outDir, { recursive: true });
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "ovc-poster-"));

const dateSlug = data.dateLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const written = [];
for (const variant of templates) {
  const htmlPath = path.join(tmpDir, `${variant}.html`);
  fs.writeFileSync(htmlPath, page(variant, qrDataUrl));
  const outPath = path.join(outDir, `ovc-dropin-${dateSlug}-${variant}-1080x1350.png`);
  // New headless screenshot mode: exact window = exact poster, 2x for crispness
  // (2160x2700 — LinkedIn downscales cleanly). The virtual time budget lets the
  // Google Fonts load before the shot is taken.
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=2",
      "--window-size=1080,1350",
      "--virtual-time-budget=15000",
      `--screenshot=${outPath}`,
      `file://${htmlPath}`,
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );
  if (!fs.existsSync(outPath)) fail(`Chrome did not produce ${outPath}`);
  written.push(outPath);
}

fs.rmSync(tmpDir, { recursive: true, force: true });

console.log("Poster data:");
console.log(`  ${data.title} — ${data.dateLabel}, ${data.timeLabel}`);
console.log(`  ${data.venue}, ${data.address}`);
console.log(`  QR -> ${data.luma}`);
console.log("\nWritten:");
for (const p of written) console.log(`  ${path.relative(REPO_ROOT, p)}`);
