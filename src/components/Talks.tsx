import { Section, Eyebrow, SectionHeading, Lede } from "./Section";
import { talks } from "@/content/talks";

export default function Talks() {
  return (
    <Section id="talks" tone="paper">
      <div className="max-w-2xl">
        <Eyebrow>Talks &amp; decks</Eyebrow>
        <SectionHeading className="mt-4">We don&apos;t just hang out. We share what we learn.</SectionHeading>
        <div className="mt-5">
          <Lede>
            Some sessions come with a short talk. Here are a couple worth reading even if you never
            make it to a Thursday.
          </Lede>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {talks.map((t) => (
          <article
            key={t.title}
            className="flex flex-col rounded-card border border-line bg-mist p-7 transition-colors hover:border-ink/20"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-pill bg-ember/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-ember-ink">
                {t.pages} pages
              </span>
              <span className="text-sm text-ink-faint">{t.author}</span>
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">{t.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{t.summary}</p>

            <ul className="mt-5 space-y-2">
              {t.takeaways.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-ink-soft">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href={t.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-ember-ink hover:underline"
            >
              Read the deck on LinkedIn
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
