import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { seriesParts } from "@/content/articles";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

const SERIES_NAME = "How LLMs work, from Karpathy";
const INTRO =
  "A plain-English, five-part primer on how large language models like ChatGPT actually work, distilled from Andrej Karpathy's deep dive. Read it in order, or jump to the part you're curious about.";

export const metadata: Metadata = {
  title: "How do LLMs work? A 5-part plain-English primer",
  description: INTRO,
  alternates: {
    canonical: "/llms",
    languages: { en: "/llms", "x-default": "/llms" },
  },
  openGraph: {
    title: "How do LLMs work? A 5-part plain-English primer · Oslo Vibe Coding",
    description: INTRO,
    url: `${SITE_URL}/llms`,
  },
};

export default function LlmsHubPage() {
  const parts = seriesParts(SERIES_NAME);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWorkSeries",
            "@id": `${SITE_URL}/llms#series`,
            name: SERIES_NAME,
            alternateName: "How LLMs work",
            description: INTRO,
            url: `${SITE_URL}/llms`,
            inLanguage: "en",
            isAccessibleForFree: true,
            publisher: { "@id": `${SITE_URL}/#org` },
            hasPart: parts.map((p) => ({
              "@type": "Article",
              name: p.title,
              url: `${SITE_URL}/articles/${p.slug}`,
              position: p.series!.part,
            })),
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Articles", path: "/articles" },
          { name: "How LLMs work", path: "/llms" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Eyebrow dark>A 5-part primer</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            How do LLMs work?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">{INTRO}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <ol className="space-y-5">
          {parts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/articles/${p.slug}`}
                className="group flex gap-5 rounded-card border border-line bg-mist p-6 transition-colors hover:border-ink/20 sm:p-7"
              >
                <span className="font-display text-3xl font-bold leading-none text-ember/40 sm:text-4xl">
                  {p.series!.part}
                </span>
                <span className="flex-1">
                  <h2 className="font-display text-xl font-bold leading-tight tracking-tight group-hover:text-ember-ink sm:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-ink-soft">{p.dek}</p>
                  <span className="mt-3 inline-block font-mono text-xs uppercase tracking-wider text-ink-faint">
                    {p.readingTimeMin} min read →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Understand it, then build with it.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            Knowing how these models work makes you far better at directing them. Bring your questions to a
            free Oslo Vibe Coding drop-in.
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
              href="/articles"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              All articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
