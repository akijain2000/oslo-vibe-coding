import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import SparkMark from "@/components/SparkMark";
import { resourceSections } from "@/content/resources";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Resources: learn vibe coding from zero",
  description:
    "A free, curated on-ramp to building software with AI: what vibe coding is, the tools, free courses from zero, and why AI should reach everyone. Picked by Oslo Vibe Coding.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources: learn vibe coding from zero · Oslo Vibe Coding",
    description:
      "A free, curated on-ramp to building software with AI. What vibe coding is, the tools, free courses, and the safety reading.",
    url: `${SITE_URL}/resources`,
  },
};

export default function ResourcesPage() {
  return (
    <>
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <Eyebrow dark>The library</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Everything you need to start, <span className="spark-text">free</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
            The resources we actually point newcomers to. High-signal, mostly free, and arranged so
            you can start tonight, even if you have never written a line of code.
          </p>
          <Link
            href="/#next"
            className="mt-8 inline-flex items-center gap-1.5 rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
          >
            Or just come to a session
            <span aria-hidden>→</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="space-y-20">
          {resourceSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {section.title}
                </h2>
              </div>
              <p className="mt-2 max-w-2xl text-ink-soft">{section.intro}</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-card border border-line bg-mist p-6 transition-colors hover:border-ink/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <SparkMark className="mt-1 h-4 w-4 text-ember" />
                      {item.free && (
                        <span className="rounded-pill bg-ink/[0.06] px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-ink-soft">
                          Free
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-faint">{item.by}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.blurb}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-ember-ink">
                      Open <span aria-hidden>→</span>
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 rounded-card border border-line bg-mist p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Reading is good. Building with people is better.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Bring any of this to a Thursday session and we will work through it together.
          </p>
          <Link
            href="/#next"
            className="mt-7 inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#26242f]"
          >
            See the next session
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
