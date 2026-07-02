import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { CollectionPageJsonLd } from "@/components/JsonLd";
import { articles } from "@/content/articles";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Articles on AI coding, agents, and how LLMs work",
  description:
    "Plain-English essays and distilled learning from Oslo Vibe Coding: how LLMs actually work (a 5-part Karpathy primer), what cheap AI does to the developer's job, and honest notes on agentic engineering.",
  alternates: {
    canonical: "/articles",
    languages: { en: "/articles", "x-default": "/articles" },
  },
  openGraph: {
    title: "Articles · Oslo Vibe Coding",
    description: "Plain-English essays and distilled learning on building with AI.",
    url: `${SITE_URL}/articles`,
  },
};

export default function ArticlesPage() {
  return (
    <>
      <CollectionPageJsonLd
        name="Articles on AI coding, agents, and how LLMs work"
        description="Plain-English essays and distilled learning on building with AI, from Oslo Vibe Coding."
        path="/articles"
        items={articles.map((a) => ({ name: a.title, path: `/articles/${a.slug}` }))}
      />
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <Eyebrow dark>Articles</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="spark-text">Talks and essays</span>, written out in full.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Our talks, expanded into proper essays you can actually read. Honest, in-depth, and free,
            like everything else here.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <Link
          href="/llms"
          className="group mb-8 flex flex-wrap items-center justify-between gap-3 rounded-card border border-ember/30 bg-ember/[0.06] p-5 transition-colors hover:border-ember/50 sm:p-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ember-ink">A 5-part primer</p>
            <p className="mt-1 font-display text-lg font-bold tracking-tight text-ink">
              How do LLMs work? Start the series →
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">/llms</span>
        </Link>

        <div className="space-y-5">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group block rounded-card border border-line bg-mist p-7 transition-colors hover:border-ink/20 sm:p-9"
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
                <span>{a.author}</span>
                <span aria-hidden>·</span>
                <span>{a.readingTimeMin} min read</span>
                {(a.deckPages || a.kicker) && (
                  <>
                    <span aria-hidden>·</span>
                    <span>{a.deckPages ? `from a ${a.deckPages}-page talk` : a.kicker}</span>
                  </>
                )}
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight group-hover:text-ember-ink sm:text-3xl">
                {a.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{a.dek}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-ember-ink">
                Read the article <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
