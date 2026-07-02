import { Section, SectionHeading } from "./Section";
import SparkMark from "./SparkMark";
import { channels } from "@/content/links";
import { upcomingEvent, type EventItem } from "@/content/events";

const copy = {
  en: {
    heading: "Bring a laptop and an idea. Leave with something you started.",
    nextSession: (e: EventItem) =>
      `Next session: ${e.dateLabel}, ${e.timeLabel} at ${e.venue}.`,
    fallback: "We run free drop-in sessions in Oslo.",
    tagline: "No experience required. No one codes alone.",
  },
  no: {
    heading: "Ta med en laptop og en idé. Gå hjem med noe du har startet på.",
    nextSession: (e: EventItem) =>
      `Neste samling: ${e.dateLabel}, ${e.timeLabel} på ${e.venue}.`,
    fallback: "Vi holder gratis drop-in-samlinger i Oslo.",
    tagline: "Ingen erfaring nødvendig. Ingen koder alene.",
  },
} as const;

export default function Join({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];
  return (
    <Section id="join" tone="paper">
      <div className="rounded-card bg-ember px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <SparkMark className="mx-auto h-9 w-9 text-white" />
        <SectionHeading className="mx-auto mt-6 max-w-3xl text-white">
          {t.heading}
        </SectionHeading>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90">
          {upcomingEvent ? t.nextSession(upcomingEvent) : t.fallback}{" "}
          {t.tagline}
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-card bg-white/10 p-6 text-left ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <h3 className="font-display text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{c.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold">
                {c.cta} <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
