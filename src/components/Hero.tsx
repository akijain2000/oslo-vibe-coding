import SparkMark from "./SparkMark";
import CTAButton from "./CTAButton";
import { brand } from "@/lib/brand";
import { links } from "@/content/links";
import { upcomingEvent } from "@/content/events";

const copy = {
  en: {
    eyebrow: brand.eyebrow,
    tagline: brand.oneLiner,
    rsvp: "RSVP for the next session",
    explore: "See how it works",
    nextUp: "Next up",
    between: "Next date being scheduled",
    cadence: "Roughly weekly · always free",
  },
  no: {
    eyebrow: "Der ingen koder alene",
    tagline:
      "Et varmt fellesskap i Oslo for alle som bygger med Claude Code, Cursor og AI. Vi møtes, deler og koder sammen.",
    rsvp: "Meld deg på neste samling",
    explore: "Se hvordan det fungerer",
    nextUp: "Neste gang",
    between: "Neste dato planlegges",
    cadence: "Omtrent ukentlig · alltid gratis",
  },
} as const;

export default function Hero({ locale = "en" }: { locale?: "en" | "no" }) {
  return (
    <div className="relative overflow-hidden bg-night text-paper">
      {/* ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,90,44,0.45), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,176,32,0.35), transparent 65%)" }}
      />
      {/* drifting sparks */}
      <SparkMark aria-hidden className="flicker absolute right-[18%] top-[24%] h-4 w-4 text-amber/70" />
      <SparkMark aria-hidden className="flicker absolute right-[34%] top-[60%] h-3 w-3 text-ember/60" />
      <SparkMark aria-hidden className="flicker absolute left-[8%] top-[38%] h-2.5 w-2.5 text-glow/50" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-36 sm:px-8 sm:pb-28 sm:pt-40">
        <p className="rise inline-flex items-center gap-2 rounded-pill border border-night-line bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-cream-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          {brand.city} · {copy[locale].eyebrow}
        </p>

        <h1 className="rise mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">
          {locale === "no" ? (
            <>
              Ingen koder <span className="spark-text">alene</span>.
            </>
          ) : (
            <>
              No one codes <span className="spark-text">alone</span>.
            </>
          )}
        </h1>

        <p className="rise mt-7 max-w-2xl text-lg leading-relaxed text-cream-dim sm:text-xl">
          {copy[locale].tagline}
        </p>

        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <CTAButton href={links.luma} external variant="ember">
            {copy[locale].rsvp}
          </CTAButton>
          <CTAButton href="#how" variant="ghost-dark">
            {copy[locale].explore}
            <span aria-hidden>↓</span>
          </CTAButton>
        </div>

        <div className="rise mt-12 inline-flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-night-line bg-night-2/60 px-5 py-4 text-sm">
          <span className="font-semibold text-paper">
            {upcomingEvent ? copy[locale].nextUp : copy[locale].between}
          </span>
          {upcomingEvent ? (
            <>
              <span className="text-cream-dim">{upcomingEvent.dateLabel}</span>
              <span className="text-night-line">·</span>
              <span className="text-cream-dim">{upcomingEvent.timeLabel}</span>
              <span className="text-night-line">·</span>
              <span className="text-cream-dim">{upcomingEvent.venue}</span>
            </>
          ) : (
            <span className="text-cream-dim">{copy[locale].cadence}</span>
          )}
        </div>
      </div>
    </div>
  );
}
