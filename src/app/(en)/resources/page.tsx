import type { Metadata } from "next";
import ResourcesIndex from "@/components/resources/ResourcesIndex";
import { hreflangAlternates } from "@/lib/i18n";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Resources: learn vibe coding from zero",
  description:
    "A free, curated on-ramp to building software with AI. Every resource has a plain-English summary you can read right here before clicking through. Picked by Oslo Vibe Coding.",
  alternates: { canonical: "/resources", languages: hreflangAlternates("/resources") },
  openGraph: {
    title: "Resources: learn vibe coding from zero · Oslo Vibe Coding",
    description: "A free, curated on-ramp to building software with AI, each with a TL;DR you can read on-site.",
    url: `${SITE_URL}/resources`,
    locale: "en_US",
    alternateLocale: ["nb_NO"],
  },
};

export default function Page() {
  return (
    <div lang="en">
      <ResourcesIndex locale="en" />
    </div>
  );
}
