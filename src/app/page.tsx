import Hero from "@/components/Hero";
import NextEvent from "@/components/NextEvent";
import HowItWorks from "@/components/HowItWorks";
import Ethos from "@/components/Ethos";
import PastEvents from "@/components/PastEvents";
import Talks from "@/components/Talks";
import Updates from "@/components/Updates";
import ResourcesTeaser from "@/components/ResourcesTeaser";
import Organisers from "@/components/Organisers";
import Mission from "@/components/Mission";
import Join from "@/components/Join";
import { EventJsonLd } from "@/components/JsonLd";
import { upcomingEvent } from "@/content/events";

export default function Home() {
  return (
    <>
      <Hero />
      <NextEvent />
      <HowItWorks />
      <Ethos />
      <PastEvents />
      <Talks />
      <Updates />
      <ResourcesTeaser />
      <Organisers />
      <Mission />
      <Join />
      {upcomingEvent && <EventJsonLd event={upcomingEvent} />}
    </>
  );
}
