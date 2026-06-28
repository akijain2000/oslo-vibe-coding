import Link from "next/link";
import { Section, Eyebrow, SectionHeading, Lede } from "./Section";
import { resourceSections } from "@/content/resources";

export default function ResourcesTeaser() {
  return (
    <Section id="resources" tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Start anywhere</Eyebrow>
          <SectionHeading className="mt-4">A free on-ramp, even if Thursday is far away.</SectionHeading>
          <div className="mt-5">
            <Lede>
              The resources we actually point newcomers to. What vibe coding is, the tools, free
              courses from zero, and why we think AI should reach everyone.
            </Lede>
          </div>
        </div>
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#26242f]"
        >
          Open the resource library
          <span aria-hidden>→</span>
        </Link>
      </div>

      <Link
        href="/start"
        className="group mt-12 flex flex-col items-start justify-between gap-5 rounded-card bg-night p-7 text-paper transition-colors hover:bg-night-2 sm:flex-row sm:items-center sm:p-9"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-glow">New to all this?</p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Getting started with vibe coding
          </h3>
          <p className="mt-2 max-w-xl text-cream-dim">
            The whole thing from zero, in one read. Never written a line of code? Start here and ship
            something tonight.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white">
          Read the guide <span aria-hidden>→</span>
        </span>
      </Link>

      <p className="mt-12 font-mono text-xs uppercase tracking-wider text-ink-faint">Or browse by topic</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resourceSections.map((s) => (
          <Link
            key={s.id}
            href={`/resources#${s.id}`}
            className="group rounded-card border border-line bg-mist p-6 transition-colors hover:border-ink/20"
          >
            <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.intro}</p>
            <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-ink-faint">
              {s.items.length} links →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
