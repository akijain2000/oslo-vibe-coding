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

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
