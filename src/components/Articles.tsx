import Link from "next/link";
import { Section, Eyebrow, SectionHeading } from "./Section";
import Carousel from "./Carousel";
import { articles } from "@/content/articles";

const copy = {
  en: {
    ariaLabel: "Articles",
    eyebrow: "Articles",
    heading: "We write it down, too.",
    intro:
      "Our talks, expanded into proper essays. Worth reading even if you never make it to a Thursday.",
    allArticles: "All articles",
    minRead: "min read",
    readArticle: "Read the article",
  },
  no: {
    ariaLabel: "Artikler",
    eyebrow: "Artikler",
    heading: "Vi skriver det ned også.",
    intro:
      "Foredragene våre, utvidet til ordentlige essays. Verdt å lese selv om du aldri rekker en torsdag.",
    allArticles: "Alle artikler",
    minRead: "min lesing",
    readArticle: "Les artikkelen",
  },
} as const;

// Long-form essays (expanded from the organisers' talks) as a swipeable row.
export default function Articles({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];
  return (
    <Section id="writing" tone="mist">
      <Carousel
        ariaLabel={t.ariaLabel}
        header={
          <div className="max-w-2xl">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <SectionHeading className="mt-4">{t.heading}</SectionHeading>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t.intro}</p>
          </div>
        }
        action={
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 rounded-pill border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink/[0.03]"
          >
            {t.allArticles}
            <span aria-hidden>→</span>
          </Link>
        }
      >
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="group flex w-[300px] shrink-0 snap-start flex-col rounded-card border border-line bg-paper p-7 transition-colors hover:border-ink/20 sm:w-[360px]"
          >
            <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
              <span>
                {a.readingTimeMin} {t.minRead}
              </span>
              <span>{a.author}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight group-hover:text-ember-ink">
              {a.title}
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{a.dek}</p>
            <span className="mt-6 inline-block text-sm font-semibold text-ember-ink">
              {t.readArticle} <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </Carousel>
    </Section>
  );
}
