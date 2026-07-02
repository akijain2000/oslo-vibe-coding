import Hero from "@/components/Hero";
import NextEvent from "@/components/NextEvent";
import HowItWorks from "@/components/HowItWorks";
import Sessions from "@/components/Sessions";
import Learn from "@/components/Learn";
import Articles from "@/components/Articles";
import Belief from "@/components/Belief";
import Organisers from "@/components/Organisers";
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
      <Sessions />
      <Learn />
      <Articles />
      <Belief />
      <Organisers />
      <Join />
      {upcomingEvent && <EventJsonLd event={upcomingEvent} />}
    </>
  );
}
