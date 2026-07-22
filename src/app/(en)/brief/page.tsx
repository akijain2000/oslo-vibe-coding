import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { CollectionPageJsonLd } from "@/components/JsonLd";
import { visibleBriefs } from "@/content/brief";
import { SITE_URL } from "@/lib/brand";

const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export const metadata: Metadata = {
  title: "AI Brief — one AI story, explained without the hype",
  description:
    "Short, plain-English explainers on the AI news that matters, from Oslo Vibe Coding: what actually happened, one clear analogy, and what it means. No breathless headlines, no doom.",
  alternates: {
    canonical: "/brief",
    languages: { en: "/brief", "x-default": "/brief" },
  },
  openGraph: {
    title: "AI Brief · Oslo Vibe Coding",
    description: "One AI story, explained without the hype.",
    url: `${SITE_URL}/brief`,
  },
};

export default function BriefIndexPage() {
  const briefs = visibleBriefs();
  return (
    <>
      <CollectionPageJsonLd
        name="AI Brief"
        description="Short, plain-English explainers on the AI news that matters, from Oslo Vibe Coding."
        path="/brief"
        items={briefs.map((b) => ({ name: b.title, path: `/brief/${b.slug}` }))}
      />
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <Eyebrow dark>AI Brief</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="spark-text">One AI story</span>, explained without the hype.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
            The AI news that matters, in plain English: what actually happened, one clear analogy, and
            what it means. No breathless headlines, no doom. Free, like everything else here.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        {briefs.length === 0 ? (
          <p className="text-ink-soft">The first brief lands soon.</p>
        ) : (
          <div className="space-y-5">
            {briefs.map((b) => (
              <Link
                key={b.slug}
                href={`/brief/${b.slug}`}
                className="group block rounded-card border border-line bg-mist p-7 transition-colors hover:border-ink/20 sm:p-9"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  <span>{fmtDate(b.datePublished)}</span>
                  <span aria-hidden>·</span>
                  <span>{b.readingTimeMin} min read</span>
                  {b.status === "draft" && (
                    <>
                      <span aria-hidden>·</span>
                      <span className="text-ember-ink">Draft preview</span>
                    </>
                  )}
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight group-hover:text-ember-ink sm:text-3xl">
                  {b.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{b.dek}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-ember-ink">
                  Read the brief <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
