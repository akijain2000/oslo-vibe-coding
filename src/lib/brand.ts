// Single source of truth for the brand. Change the name in ONE place and it
// propagates across the whole site, metadata, and structured data.

export const SITE_URL = "https://oslo-vibe-coding.vercel.app";

export const brand = {
  name: "Oslo Vibe Coding",
  short: "OVC",
  // The handle that already exists across channels.
  handle: "vibesoslo",
  // Functional eyebrow, straight off the poster.
  eyebrow: "Code. Chill. Learn.",
  // The emotional line. Earned, not invented — it's how the founders actually talk.
  tagline: "No one codes alone.",
  // The plain-English what-is-this, Norwegian-functional: says exactly what it is.
  oneLiner:
    "Free, drop-in AI coding sessions in Oslo. Bring a laptop and an idea. Beginners genuinely welcome.",
  city: "Oslo",
  country: "Norway",
  url: SITE_URL,
  founded: "2026",
  // Used in metadata + JSON-LD.
  description:
    "Oslo Vibe Coding is a free, open community for building software with AI. Drop-in sessions, no gatekeeping, beginners welcome. Bring a laptop and an idea.",
  keywords: [
    "vibe coding",
    "vibe coding Oslo",
    "AI coding Oslo",
    "Oslo tech meetup",
    "learn to code with AI",
    "Claude Code",
    "Cursor",
    "AI for everyone",
    "coding community Oslo",
    "Oslo developers",
  ],
} as const;
