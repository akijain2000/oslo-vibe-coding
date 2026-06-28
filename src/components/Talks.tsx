import Link from "next/link";
import { Section, Eyebrow, SectionHeading, Lede } from "./Section";
import { articles } from "@/content/articles";

// Home teaser for the long-form articles (expanded from the organisers' talks).
export default function Talks() {
  return (
    <Section id="writing" tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Articles</Eyebrow>
          <SectionHeading className="mt-4">We don&apos;t just hang out. We write it down.</SectionHeading>
          <div className="mt-5">
            <Lede>
              Our talks, expanded into proper essays. Worth reading even if you never make it to a
              Thursday.
            </Lede>
          </div>
        </div>
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 rounded-pill border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink/[0.03]"
        >
          All articles
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="group flex flex-col rounded-card border border-line bg-mist p-7 transition-colors hover:border-ink/20"
          >
            <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
              <span>{a.readingTimeMin} min read</span>
              <span>{a.author}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight group-hover:text-ember-ink">
              {a.title}
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{a.dek}</p>
            <span className="mt-6 inline-block text-sm font-semibold text-ember-ink">
              Read the article <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
