import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/brand";
import { articles } from "@/content/articles";
import { allResources } from "@/content/resources";
import { lectures } from "@/content/frontier";

// lastModified is intentionally omitted: a build-time `new Date()` would claim
// every page changed on every deploy (fake freshness). Add real per-content
// dates here if/when content gains them.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: SITE_URL, "nb-NO": `${SITE_URL}/no`, "x-default": SITE_URL } },
    },
    {
      url: `${SITE_URL}/no`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en: SITE_URL, "nb-NO": `${SITE_URL}/no`, "x-default": SITE_URL } },
    },
    { url: `${SITE_URL}/start`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/articles`, changeFrequency: "monthly", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${SITE_URL}/articles/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/frontier`, changeFrequency: "monthly", priority: 0.8 },
    ...lectures.map((l) => ({
      url: `${SITE_URL}/frontier/${l.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}/resources`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: { en: `${SITE_URL}/resources`, "nb-NO": `${SITE_URL}/no/resources`, "x-default": `${SITE_URL}/resources` },
      },
    },
    {
      url: `${SITE_URL}/no/resources`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: { en: `${SITE_URL}/resources`, "nb-NO": `${SITE_URL}/no/resources`, "x-default": `${SITE_URL}/resources` },
      },
    },
  ];

  for (const r of allResources) {
    const en = `${SITE_URL}/resources/${r.slug}`;
    const no = `${SITE_URL}/no/resources/${r.slug}`;
    const languages = { en, "nb-NO": no, "x-default": en };
    entries.push({ url: en, changeFrequency: "monthly", priority: 0.6, alternates: { languages } });
    entries.push({ url: no, changeFrequency: "monthly", priority: 0.5, alternates: { languages } });
  }

  return entries;
}
