import type { Metadata } from "next";
import FrontierIndex from "@/components/frontier/FrontierIndex";
import { CollectionPageJsonLd, Cs153CourseJsonLd } from "@/components/JsonLd";
import { lectures } from "@/content/frontier";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Frontier Systems, distilled: Stanford CS 153 lecture notes",
  description:
    "Short study guides for all 13 guest lectures from Stanford's CS 153: Frontier Systems, from Nadella and Altman to Jensen Huang. The big idea, the specifics, quotes, and a diagram for each. Free, by Oslo Vibe Coding.",
  alternates: { canonical: "/frontier", languages: { en: "/frontier", "x-default": "/frontier" } },
  openGraph: {
    title: "Frontier Systems, distilled · Oslo Vibe Coding",
    description:
      "All 13 Stanford CS 153 guest lectures, distilled into short study guides with visuals. Free to read, made to teach from.",
    url: `${SITE_URL}/frontier`,
    locale: "en_US",
  },
};

export default function Page() {
  return (
    <div lang="en">
      <Cs153CourseJsonLd />
      <CollectionPageJsonLd
        name="Frontier Systems, distilled"
        description="Study guides for all 13 guest lectures from Stanford's CS 153: Frontier Systems."
        path="/frontier"
        items={lectures.map((l) => ({ name: `${l.title} — ${l.speaker}`, path: `/frontier/${l.slug}` }))}
      />
      <FrontierIndex />
    </div>
  );
}
