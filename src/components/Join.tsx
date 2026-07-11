import { Section, SectionHeading } from "./Section";
import CTAButton from "./CTAButton";
import SparkMark from "./SparkMark";
import { links } from "@/content/links";
import { upcomingEvent, type EventItem } from "@/content/events";

const copy = {
  en: {
    headingLead: "Bring a laptop and an idea. ",
    headingSpark: "No one codes alone.",
    nextSession: (event: EventItem) =>
      `Next session: ${event.dateLabel}, ${event.timeLabel} at ${event.venue}.`,
    fallback: "The next free Oslo drop-in is being scheduled now.",
    tagline: "No experience required—just curiosity.",
    primary: "RSVP / get the next date",
    secondary: "Join the WhatsApp community",
  },
  no: {
    headingLead: "Ta med en laptop og en idé. ",
    headingSpark: "Ingen koder alene.",
    nextSession: (event: EventItem) =>
      `Neste samling: ${event.dateLabel}, ${event.timeLabel} på ${event.venue}.`,
    fallback: "Den neste gratis drop-in-samlingen i Oslo planlegges nå.",
    tagline: "Ingen erfaring kreves—bare nysgjerrighet.",
    primary: "Meld deg på / få neste dato",
    secondary: "Bli med i WhatsApp-fellesskapet",
  },
} as const;

export default function Join({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];

  return (
    <Section id="join" tone="paper">
      <div className="rounded-card bg-ember px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <SparkMark className="mx-auto h-9 w-9 text-white" />
        <SectionHeading className="mx-auto mt-6 max-w-3xl text-white">
          {t.headingLead}<span className="text-white">{t.headingSpark}</span>
        </SectionHeading>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90">
          {upcomingEvent ? t.nextSession(upcomingEvent) : t.fallback} {t.tagline}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton href={links.luma} external variant="ink">
            {t.primary}<span aria-hidden>→</span>
          </CTAButton>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-pill border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t.secondary}<span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
