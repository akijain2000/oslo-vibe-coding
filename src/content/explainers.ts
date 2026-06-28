// On-site explainers (~500 words) for each resource, in English and Norwegian.
// Keyed by the resource slug (see resourceSlug). Populated from generated content.

import type { Locale } from "@/lib/i18n";
import { explainersEn } from "./explainers.en";
import { explainersNo } from "./explainers.no";

export type ExplainerSection = { heading: string; paragraphs: string[] };
export type Explainer = { lead: string; sections: ExplainerSection[]; keyPoints: string[] };

const byLocale: Record<Locale, Record<string, Explainer>> = {
  en: explainersEn,
  no: explainersNo,
};

export const getExplainer = (locale: Locale, slug: string): Explainer | undefined =>
  byLocale[locale]?.[slug];

export const wordCount = (e: Explainer) =>
  (e.lead + " " + e.sections.flatMap((s) => [s.heading, ...s.paragraphs]).join(" ") + " " + e.keyPoints.join(" "))
    .trim()
    .split(/\s+/).length;

export const readingMinutes = (e: Explainer) => Math.max(2, Math.round(wordCount(e) / 200));
