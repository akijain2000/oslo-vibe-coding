import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/brand";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/start`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/articles`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${SITE_URL}/articles/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
