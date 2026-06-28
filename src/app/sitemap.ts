import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/brand";
import { articles } from "@/content/articles";
import { allResources } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/start`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/articles`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${SITE_URL}/articles/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/resources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { en: `${SITE_URL}/resources`, "nb-NO": `${SITE_URL}/no/resources` } },
    },
    {
      url: `${SITE_URL}/no/resources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: { en: `${SITE_URL}/resources`, "nb-NO": `${SITE_URL}/no/resources` } },
    },
  ];

  for (const r of allResources) {
    const en = `${SITE_URL}/resources/${r.slug}`;
    const no = `${SITE_URL}/no/resources/${r.slug}`;
    const languages = { en, "nb-NO": no };
    entries.push({ url: en, lastModified: now, changeFrequency: "monthly", priority: 0.6, alternates: { languages } });
    entries.push({ url: no, lastModified: now, changeFrequency: "monthly", priority: 0.5, alternates: { languages } });
  }

  return entries;
}
