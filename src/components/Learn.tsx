import Link from "next/link";
import { Section, Eyebrow, SectionHeading, Lede } from "./Section";
import Carousel from "./Carousel";
import { resourceSections } from "@/content/resources";

// The on-ramp: two signpost banners, then the topics as a swipeable strip.
// The full library lives on /resources; the home only sets the direction.
export default function Learn() {
  const topics = resourceSections.filter((s) => s.id !== "frontier");

  return (
    <Section id="resources" tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Start anywhere</Eyebrow>
          <SectionHeading className="mt-4">A free on-ramp, even when Thursday is far away.</SectionHeading>
          <div className="mt-5">
            <Lede>
              What vibe coding is, the tools, free courses from zero, and the papers behind modern
              AI. The things we actually point newcomers to.
            </Lede>
          </div>
        </div>
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#26242f]"
        >
          Open the library
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <Link
          href="/start"
          className="group flex flex-col justify-between gap-6 rounded-card bg-night p-7 text-paper transition-colors hover:bg-night-2 sm:p-9"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-glow">New to all this?</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Getting started with vibe coding
            </h3>
            <p className="mt-2 text-cream-dim">
              The whole thing from zero, in one read. Never written a line of code? Start here and
              make a first small thing tonight.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white">
            Read the guide <span aria-hidden>→</span>
          </span>
        </Link>

        <Link
          href="/frontier"
          className="group flex flex-col justify-between gap-6 rounded-card border border-line bg-mist p-7 transition-colors hover:border-ink/20 sm:p-9"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ember-ink">Learning aids</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">Frontier, distilled</h3>
            <p className="mt-2 text-ink-soft">
              All 13 guest lectures from Stanford&apos;s CS 153, turned into short study guides with
              visuals. The people building AI, in plain English.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Nadella", "Altman", "Huang", "Horowitz", "Tan & Hu", "+8 more"].map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-line bg-paper px-3 py-1 font-mono text-xs text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-paper">
            Read the notes <span aria-hidden>→</span>
          </span>
        </Link>
      </div>

      <div className="mt-12">
        <Carousel
          ariaLabel="Resource topics"
          header={
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Or browse by topic</p>
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
                {s.items.length} links →
              </span>
            </Link>
          ))}
        </Carousel>
      </div>
    </Section>
  );
}
