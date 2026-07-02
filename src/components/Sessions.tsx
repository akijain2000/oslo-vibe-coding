import { Section, Eyebrow, SectionHeading } from "./Section";
import Carousel from "./Carousel";
import { pastEvents } from "@/content/events";

const copy = {
  en: {
    ariaLabel: "Past sessions",
    eyebrow: "Where we've been",
    heading: "A few sessions in, and growing.",
    intro:
      "It started in a public library with two people comparing tools. We are turning the drop-ins into a weekly thing.",
  },
  no: {
    ariaLabel: "Tidligere samlinger",
    eyebrow: "Der vi har vært",
    heading: "Noen samlinger inn, og vi vokser.",
    intro:
      "Det startet på et folkebibliotek med to personer som sammenlignet verktøy. Vi gjør de uformelle treffene om til noe ukentlig.",
  },
} as const;

// Past sessions as a browsable horizontal gallery rather than a long timeline.
export default function Sessions({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];
  return (
    <Section id="sessions" tone="mist">
      <Carousel
        ariaLabel={t.ariaLabel}
        header={
          <div className="max-w-2xl">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <SectionHeading className="mt-4">{t.heading}</SectionHeading>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t.intro}</p>
          </div>
        }
      >
        {pastEvents.map((e) => (
          <article
            key={e.slug}
            className="flex w-[280px] shrink-0 snap-start flex-col rounded-card border border-line bg-paper p-6 sm:w-[340px]"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
              {e.dateLabel}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{e.title}</h3>
            <p className="mt-1 text-sm font-medium text-ink-soft">
              {e.venue}
              {e.venue !== e.city ? ` · ${e.city}` : ""}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{e.recap ?? e.blurb}</p>
          </article>
        ))}
      </Carousel>
    </Section>
  );
}
