import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/brand";

// Being found AND cited by AI answer engines is the whole point of this site, so
// the AI-citation crawlers are welcomed EXPLICITLY, not just via the wildcard.
// Keep the wildcard first (covers Google/Bing and everything else). Do NOT
// "tidy" the per-bot entries back into `*` — the explicit opt-in is deliberate.
const AI_CITATION_BOTS = [
  "GPTBot", // OpenAI training crawler
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot", // Anthropic crawler
  "Claude-SearchBot",
  "anthropic-ai",
  "Claude-User",
  "PerplexityBot", // Perplexity index
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews training opt-in
  "Applebot-Extended",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CITATION_BOTS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
