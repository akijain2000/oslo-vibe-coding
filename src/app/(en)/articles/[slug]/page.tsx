import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Prose from "@/components/Prose";
import SparkMark from "@/components/SparkMark";
import { FrontierDiagram } from "@/components/frontier/FrontierDiagrams";
import { articles, getArticle, articleDiagram } from "@/content/articles";
import { ArticleJsonLd } from "@/components/JsonLd";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: `${article.title} · Oslo Vibe Coding`,
      description: article.dek,
      url: `${SITE_URL}/articles/${article.slug}`,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <ArticleJsonLd article={article} />
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Link
            href="/articles"
            className="font-mono text-xs uppercase tracking-wider text-cream-dim transition-colors hover:text-glow"
          >
            ← Articles
          </Link>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-cream-dim">{article.dek}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-cream-dim/70">
            <span>{article.author}</span>
            <span aria-hidden>·</span>
            <span>{article.readingTimeMin} min read</span>
            {(article.kicker || article.deckPages) && (
              <>
                <span aria-hidden>·</span>
                <span>{article.kicker ?? `from a ${article.deckPages}-page talk`}</span>
              </>
            )}
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-card border border-ember/25 bg-ember/[0.06] p-6 sm:p-7">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ember-ink">
            <SparkMark className="h-3.5 w-3.5" />
            The takeaway
          </div>
          <p className="mt-3 font-display text-lg font-medium leading-snug text-ink sm:text-xl">
            {article.takeaway}
          </p>
        </div>

        {articleDiagram[article.slug] && (
          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-card border border-line bg-night">
            <FrontierDiagram spec={articleDiagram[article.slug]} />
          </div>
        )}

        <div className="mt-14 space-y-14">
          {article.sections.map((s, i) => (
            <Prose key={i} section={s} />
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember-ink hover:underline"
          >
            {article.sourceLabel ??
              (article.deckPages ? `Originally shared as a ${article.deckPages}-page talk on LinkedIn` : "View the source")}
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-12 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Read it, then build it with people.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            Bring this to a free Oslo Vibe Coding drop-in and put it to work with people around you.
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
              href="/start"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              New to this? Start here
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
