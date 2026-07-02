import Link from "next/link";
import { Section, Eyebrow, SectionHeading, Lede } from "./Section";
import Carousel from "./Carousel";
import { resourceSections } from "@/content/resources";

const copy = {
  en: {
    eyebrow: "Start anywhere",
    heading: "A free on-ramp, even when Thursday is far away.",
    lede:
      "What vibe coding is, the tools, free courses from zero, and the papers behind modern AI. The things we actually point newcomers to.",
    openLibrary: "Open the library",
    startEyebrow: "New to all this?",
    startTitle: "Getting started with vibe coding",
    startCopy:
      "The whole thing from zero, in one read. Never written a line of code? Start here and make a first small thing tonight.",
    readGuide: "Read the guide",
    frontierEyebrow: "Learning aids",
    frontierTitle: "Frontier, distilled",
    frontierCopy:
      "All 13 guest lectures from Stanford’s CS 153, turned into short study guides with visuals. The people building AI, in plain English.",
    readNotes: "Read the notes",
    frontierMore: "+8 more",
    browseByTopic: "Or browse by topic",
    links: "links",
  },
  no: {
    eyebrow: "Start hvor du vil",
    heading: "En gratis inngangsrampe, selv når torsdag er langt unna.",
    lede:
      "Hva vibe coding er, verktøyene, gratis kurs fra null, og forskningen bak moderne KI. Tingene vi faktisk viser nykommere til.",
    openLibrary: "Åpne biblioteket",
    startEyebrow: "Helt ny til alt dette?",
    startTitle: "Kom i gang med vibe coding",
    startCopy:
      "Hele greia fra null, i én lesning. Aldri skrevet en linje kode? Start her og lag din første lille ting i kveld.",
    readGuide: "Les guiden",
    frontierEyebrow: "Læringshjelpemidler",
    frontierTitle: "Fronten, forklart enkelt",
    frontierCopy:
      "Alle 13 gjesteforelesningene fra Stanfords CS 153, gjort om til korte studieguider med visuelle forklaringer. Folkene som bygger KI, i klar tale.",
    readNotes: "Les notatene",
    frontierMore: "+8 til",
    browseByTopic: "Eller bla etter tema",
    links: "lenker",
  },
} as const;

// The on-ramp: two signpost banners, then the topics as a swipeable strip.
// The full library lives on /resources; the home only sets the direction.
export default function Learn({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];
  const topics = resourceSections.filter((s) => s.id !== "frontier");

  return (
    <Section id="resources" tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionHeading className="mt-4">{t.heading}</SectionHeading>
          <div className="mt-5">
            <Lede>{t.lede}</Lede>
          </div>
        </div>
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#26242f]"
        >
          {t.openLibrary}
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <Link
          href="/start"
          className="group flex flex-col justify-between gap-6 rounded-card bg-night p-7 text-paper transition-colors hover:bg-night-2 sm:p-9"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-glow">{t.startEyebrow}</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {t.startTitle}
            </h3>
            <p className="mt-2 text-cream-dim">
              {t.startCopy}
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white">
            {t.readGuide} <span aria-hidden>→</span>
          </span>
        </Link>

        <Link
          href="/frontier"
          className="group flex flex-col justify-between gap-6 rounded-card border border-line bg-mist p-7 transition-colors hover:border-ink/20 sm:p-9"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ember-ink">{t.frontierEyebrow}</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">{t.frontierTitle}</h3>
            <p className="mt-2 text-ink-soft">
              {t.frontierCopy}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Nadella", "Altman", "Huang", "Horowitz", "Tan & Hu", t.frontierMore].map((chip) => (
                <span
                  key={chip}
                  className="rounded-pill border border-line bg-paper px-3 py-1 font-mono text-xs text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-paper">
            {t.readNotes} <span aria-hidden>→</span>
          </span>
        </Link>
      </div>

      <div className="mt-12">
        <Carousel
          ariaLabel="Resource topics"
          header={
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{t.browseByTopic}</p>
          }
        >
          {topics.map((s) => (
            <Link
              key={s.id}
              href={`/resources#${s.id}`}
              className="group flex w-[260px] shrink-0 snap-start flex-col rounded-card border border-line bg-mist p-6 transition-colors hover:border-ink/20 sm:w-[300px]"
            >
              <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.intro}</p>
              <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-ink-faint">
                {s.items.length} {t.links} →
              </span>
            </Link>
          ))}
        </Carousel>
      </div>
    </Section>
  );
}
