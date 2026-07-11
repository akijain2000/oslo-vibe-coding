import Link from "next/link";
import { Section, Eyebrow } from "./Section";
import CTAButton from "./CTAButton";
import { upcomingEvent } from "@/content/events";
import { links } from "@/content/links";

const copy = {
  en: {
    eyebrow: "The next session",
    betweenTitle: "The next session is on 23 July.",
    betweenBody:
      "We meet roughly weekly in Oslo. Save your spot on Luma, and join WhatsApp to hear what the community is building between sessions.",
    city: "Oslo",
    cadence: "Roughly weekly",
    cost: "Always free",
    audience: "Everyone welcome",
    bring: "Bring a laptop, an idea if you have one, and curiosity.",
    getDate: "RSVP on Luma",
    rsvp: "RSVP on Luma",
    past: "Past events and recaps",
    whatsapp: "Join WhatsApp",
    date: "Date",
    time: "Time",
    where: "Where",
    openMaps: "Open in Maps",
  },
  no: {
    eyebrow: "Neste samling",
    betweenTitle: "Neste samling er 23. juli.",
    betweenBody:
      "Vi møtes omtrent ukentlig i Oslo. Meld deg på via Luma, og bli med på WhatsApp for å høre hva fellesskapet bygger mellom samlingene.",
    city: "Oslo",
    cadence: "Omtrent ukentlig",
    cost: "Alltid gratis",
    audience: "Alle er velkomne",
    bring: "Ta med en laptop, en idé hvis du har en, og nysgjerrighet.",
    getDate: "Meld deg på på Luma",
    rsvp: "Meld deg på på Luma",
    past: "Tidligere samlinger og oppsummeringer",
    whatsapp: "Bli med på WhatsApp",
    date: "Dato",
    time: "Tid",
    where: "Hvor",
    openMaps: "Åpne i Maps",
  },
} as const;

export default function NextEvent({ locale = "en" }: { locale?: "en" | "no" }) {
  const event = upcomingEvent;
  const t = copy[locale];
  const mapsUrl = event
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${event.venue}, ${event.address}`)}`
    : "";

  return (
    <Section id="next" tone="mist">
      <div className="rounded-card border border-line bg-paper p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {event ? event.title : t.betweenTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {event ? event.blurb : t.betweenBody}
            </p>

            {event ? (
              <div className="mt-8 grid gap-6 border-t border-line pt-7 sm:grid-cols-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{t.date}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{event.dateLabel}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{t.time}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{event.timeLabel}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{t.where}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{event.venue}</p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex text-sm font-semibold text-ember-ink hover:underline"
                  >
                    {t.openMaps} →
                  </a>
                </div>
              </div>
            ) : (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-7 text-sm font-semibold text-ink">
                {[t.city, t.cadence, t.cost, t.audience].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />{item}
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-7 text-sm leading-relaxed text-ink-soft">{t.bring}</p>
          </div>

          <div className="flex flex-col justify-center gap-3 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <CTAButton href={event?.rsvpUrl ?? links.luma} external variant="ember" className="w-full">
              {event ? t.rsvp : t.getDate}
            </CTAButton>
            <Link
              href="/events#past"
              className="inline-flex w-full items-center justify-center gap-2 rounded-pill border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/[0.03]"
            >
              {t.past}<span aria-hidden>→</span>
            </Link>
            <CTAButton href={links.whatsapp} external variant="outline" className="w-full">
              {t.whatsapp}<span aria-hidden>↗</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
