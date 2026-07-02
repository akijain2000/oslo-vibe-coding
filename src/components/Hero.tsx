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
    join: "Join the community",
    nextUp: "Next up",
  },
  no: {
    eyebrow: "Der ingen koder alene",
    tagline:
      "Et varmt fellesskap i Oslo for alle som bygger med Claude Code, Cursor og AI. Vi møtes, deler og koder sammen.",
    rsvp: "Meld deg på neste samling",
    join: "Bli med i fellesskapet",
    nextUp: "Neste gang",
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
          <CTAButton href={links.whatsapp} external variant="ghost-dark">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 1.76.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.45 9.9-9.9C21.94 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.13.06-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.15-.19-1.19-1.58-1.19-3.02 0-1.44.76-2.14 1.03-2.44.27-.29.58-.37.78-.37.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.82 2.03.89 2.18.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.66-.14.27.09 1.7.8 1.99.95.29.14.49.22.56.34.07.12.07.7-.17 1.38Z" />
            </svg>
            {copy[locale].join}
          </CTAButton>
        </div>

        {upcomingEvent && (
          <div className="rise mt-12 inline-flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-night-line bg-night-2/60 px-5 py-4 text-sm">
            <span className="font-semibold text-paper">{copy[locale].nextUp}</span>
            <span className="text-cream-dim">{upcomingEvent.dateLabel}</span>
            <span className="text-night-line">·</span>
            <span className="text-cream-dim">{upcomingEvent.timeLabel}</span>
            <span className="text-night-line">·</span>
            <span className="text-cream-dim">{upcomingEvent.venue}</span>
          </div>
        )}
      </div>
    </div>
  );
}
