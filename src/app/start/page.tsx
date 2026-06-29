import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import Prose from "@/components/Prose";
import { guide } from "@/content/guide";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Getting started with vibe coding",
  description: guide.dek,
  alternates: { canonical: "/start" },
  openGraph: {
    title: "Getting started with vibe coding · Oslo Vibe Coding",
    description: guide.dek,
    url: `${SITE_URL}/start`,
  },
};

export default function StartPage() {
  return (
    <>
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <Eyebrow dark>Getting started · {guide.readingTimeMin} min read</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            From never having coded to <span className="spark-text">a first build</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">{guide.dek}</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* table of contents */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">On this page</p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {guide.sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm leading-snug text-ink-soft transition-colors hover:text-ember-ink"
                >
                  <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>{" "}
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* sections */}
          <div className="min-w-0 space-y-14">
            {guide.sections.map((s) => (
              <Prose key={s.id} section={s} />
            ))}

            <div className="rounded-card bg-night p-8 text-center text-paper sm:p-10">
              <h2 className="font-display text-2xl font-bold tracking-tight">Now do it with people.</h2>
              <p className="mx-auto mt-3 max-w-md text-cream-dim">
                Once you have tried the loop, the fastest way to get good is a room full of others doing the same.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={links.luma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
                >
                  RSVP for the next session
                </a>
                <Link
                  href="/resources"
                  className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
                >
                  Browse the resource library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
