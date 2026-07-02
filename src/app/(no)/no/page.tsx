import type { Metadata } from "next";
import Hero from "@/components/Hero";
import NextEvent from "@/components/NextEvent";
import HowItWorks from "@/components/HowItWorks";
import Sessions from "@/components/Sessions";
import Learn from "@/components/Learn";
import Articles from "@/components/Articles";
import Belief from "@/components/Belief";
import Organisers from "@/components/Organisers";
import Join from "@/components/Join";
import { EventJsonLd } from "@/components/JsonLd";
import { upcomingEvent } from "@/content/events";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Oslo Vibe Coding: gratis drop-in AI-kodekvelder i Oslo",
  description:
    "Et gratis, åpent fellesskap for å bygge programvare med AI. Drop-in-samlinger, ingen portvakt, nybegynnere er velkomne. Ta med en laptop og en idé.",
  alternates: {
    canonical: "/no",
    languages: { en: "/", "nb-NO": "/no", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    alternateLocale: ["en_US"],
    url: `${SITE_URL}/no`,
    title: "Oslo Vibe Coding: ingen koder alene",
  },
};

export default function HomeNo() {
  return (
    <>
      <Hero locale="no" />
      <NextEvent locale="no" />
      <HowItWorks locale="no" />
      <Sessions locale="no" />
      <Learn locale="no" />
      <Articles locale="no" />
      <Belief locale="no" />
      <Organisers locale="no" />
      <Join locale="no" />
      {upcomingEvent && <EventJsonLd event={upcomingEvent} />}
    </>
  );
}
