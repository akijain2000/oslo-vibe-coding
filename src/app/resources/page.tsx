import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/Section";
import SparkMark from "@/components/SparkMark";
import { resourceSections, type Resource } from "@/content/resources";
import { DIAGRAMS } from "@/components/resources/Diagrams";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Resources: learn vibe coding from zero",
  description:
    "A free, curated on-ramp to building software with AI: what vibe coding is, the tools, free courses from zero, and why AI should reach everyone. Each with a TL;DR. Picked by Oslo Vibe Coding.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources: learn vibe coding from zero · Oslo Vibe Coding",
    description:
      "A free, curated on-ramp to building software with AI, each with a TL;DR so you can read before you click.",
    url: `${SITE_URL}/resources`,
  },
};

function ResourceVisual({ item }: { item: Resource }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }
  const Diagram = item.diagram ? DIAGRAMS[item.diagram] : undefined;
  if (Diagram) return <Diagram />;
  return (
    <div className="flex h-full items-center justify-center">
      <SparkMark className="h-8 w-8 text-ember" />
    </div>
  );
}

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
            you can start tonight, even if you have never written a line of code. Each has a TL;DR, so
            read before you click.
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
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-2 max-w-2xl text-ink-soft">{section.intro}</p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-card border border-line bg-mist transition-colors hover:border-ink/20"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-night">
                      <ResourceVisual item={item} />
                      {item.free && (
                        <span className="absolute right-3 top-3 rounded-pill bg-night/75 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-paper backdrop-blur-sm">
                          Free
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{item.by}</p>
                      <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.tldr}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-ember-ink">
                        Open the source <span aria-hidden>→</span>
                      </span>
                    </div>
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
