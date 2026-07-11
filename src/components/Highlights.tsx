import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, SectionHeading } from "./Section";
import { articles } from "@/content/articles";
import { pastEvents } from "@/content/events";

const copy = {
  en: {
    eyebrow: "From the room, into the open",
    heading: "See what happens when people build together.",
    intro:
      "We publish the sessions, the projects, and the lessons so the value of the room travels beyond the room.",
    recap: "Latest session recap",
    recapCta: "Read what happened",
    allCta: "See all past events and recaps",
  },
  no: {
    eyebrow: "Fra rommet, ut i det åpne",
    heading: "Se hva som skjer når folk bygger sammen.",
    intro:
      "Vi deler samlingene, prosjektene og læringen slik at verdien i rommet når lenger enn selve rommet.",
    recap: "Siste oppsummering",
    recapCta: "Les hva som skjedde (EN)",
    allCta: "Se alle tidligere samlinger og oppsummeringer (EN)",
  },
} as const;

export default function Highlights({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];
  const event = pastEvents.find((item) => item.slug === "drop-in-stortorvet-2026-07-02") ?? pastEvents[0];
  const recapArticle = articles.find((article) => article.slug === "vibe-coding-at-spaces") ?? articles[0];

  return (
    <Section id="highlights" tone="mist">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionHeading className="mt-4">{t.heading}</SectionHeading>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-soft lg:justify-self-end">{t.intro}</p>
      </div>

      <Link
        href={`/articles/${recapArticle.slug}`}
        className="group mt-12 grid overflow-hidden rounded-card bg-night text-paper lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px]">
          <Image
            src="/sessions/spaces-session-2.jpg"
            alt="The Oslo Vibe Coding community together after a drop-in session"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-wider text-glow">
            {t.recap} · {event?.dateLabel}
          </p>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {recapArticle.title}
          </h3>
          <p className="mt-4 leading-relaxed text-cream-dim">{recapArticle.dek}</p>
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-paper">
            {t.recapCta}<span aria-hidden>→</span>
          </span>
        </div>
      </Link>

      <div className="mt-7 text-center">
        <Link
          href="/events#past"
          className="inline-flex items-center gap-2 rounded-pill border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/[0.03]"
        >
          {t.allCta}<span aria-hidden>→</span>
        </Link>
      </div>
    </Section>
  );
}
