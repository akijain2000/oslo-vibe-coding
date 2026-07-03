import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { lectures } from "@/content/frontier";
import { SITE_URL } from "@/lib/brand";

type Term = { term: string; def: string; slug: string; speaker: string };

const anchor = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Flatten every lecture glossary into one alphabetized set. First definition
// wins when a term appears in more than one lecture.
function buildGlossary(): Term[] {
  const seen = new Map<string, Term>();
  for (const l of lectures) {
    for (const g of l.glossary) {
      const key = g.term.toLowerCase();
      if (!seen.has(key)) seen.set(key, { term: g.term, def: g.def, slug: l.slug, speaker: l.speaker });
    }
  }
  return [...seen.values()].sort((a, b) => a.term.localeCompare(b.term));
}

const DESCRIPTION =
  "Plain-English definitions of the AI terms that come up across the Stanford CS 153 lectures we distilled, from scaling laws and MFU to network effects and enrichment. Each links back to where it's explained.";

export const metadata: Metadata = {
  title: "AI glossary: plain-English definitions",
  description: DESCRIPTION,
  alternates: { canonical: "/glossary", languages: { en: "/glossary", "x-default": "/glossary" } },
  openGraph: {
    title: "AI glossary · Oslo Vibe Coding",
    description: DESCRIPTION,
    url: `${SITE_URL}/glossary`,
  },
};

export default function GlossaryPage() {
  const terms = buildGlossary();
  const letters = [...new Set(terms.map((t) => t.term[0].toUpperCase()))].sort();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "AI glossary",
            description: DESCRIPTION,
            url: `${SITE_URL}/glossary`,
            inLanguage: "en",
            publisher: { "@id": `${SITE_URL}/#org` },
            hasDefinedTerm: terms.map((t) => ({
              "@type": "DefinedTerm",
              name: t.term,
              description: t.def,
              url: `${SITE_URL}/glossary#${anchor(t.term)}`,
              inDefinedTermSet: `${SITE_URL}/glossary`,
            })),
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "AI glossary", path: "/glossary" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Eyebrow dark>{terms.length} terms, plain English</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            AI glossary
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">{DESCRIPTION}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <nav aria-label="Jump to letter" className="flex flex-wrap gap-2">
          {letters.map((l) => (
            <a
              key={l}
              href={`#letter-${l}`}
              className="rounded-pill border border-line bg-mist px-3 py-1 font-mono text-sm text-ink-soft transition-colors hover:border-ink/20 hover:text-ember-ink"
            >
              {l}
            </a>
          ))}
        </nav>

        <dl className="mt-12 space-y-8">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ember-ink">{letter}</h2>
              <div className="mt-4 divide-y divide-line border-t border-line">
                {terms
                  .filter((t) => t.term[0].toUpperCase() === letter)
                  .map((t) => (
                    <div key={t.term} id={anchor(t.term)} className="scroll-mt-24 py-5">
                      <dt className="font-display text-lg font-semibold text-ink">{t.term}</dt>
                      <dd className="mt-1.5 leading-relaxed text-ink-soft">{t.def}</dd>
                      <Link
                        href={`/frontier/${t.slug}`}
                        className="mt-2 inline-block font-mono text-xs uppercase tracking-wider text-ink-faint transition-colors hover:text-ember-ink"
                      >
                        from {t.speaker}&apos;s lecture →
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-14 rounded-card border border-line bg-mist p-6 text-center sm:p-8">
          <p className="text-ink-soft">
            These come from our{" "}
            <Link href="/frontier" className="font-semibold text-ember-ink hover:underline">
              Frontier Systems study guides
            </Link>
            . For how the models themselves work, read the{" "}
            <Link href="/llms" className="font-semibold text-ember-ink hover:underline">
              5-part LLM primer
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
