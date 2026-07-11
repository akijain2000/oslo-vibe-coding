import Hero from "@/components/Hero";
import NextEvent from "@/components/NextEvent";
import HowItWorks from "@/components/HowItWorks";
import Highlights from "@/components/Highlights";
import Join from "@/components/Join";
import type { Metadata } from "next";
import { EventJsonLd } from "@/components/JsonLd";
import { upcomingEvent } from "@/content/events";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", "nb-NO": "/no", "x-default": "/" } },
};

export default function Home() {
  return (
    <>
      <Hero />
      <NextEvent />
      <HowItWorks />
      <Highlights />
      <Join />
      {upcomingEvent && <EventJsonLd event={upcomingEvent} />}
    </>
  );
}
