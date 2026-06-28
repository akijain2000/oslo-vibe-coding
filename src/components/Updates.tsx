import { Section, Eyebrow, SectionHeading, Lede } from "./Section";
import LinkedInEmbed from "./LinkedInEmbed";
import { posts } from "@/content/posts";
import { links } from "@/content/links";

export default function Updates() {
  const featured = posts.find((p) => p.embedUrn);
  const cards = posts.filter((p) => p !== featured);

  return (
    <Section id="updates" tone="mist">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>From the community</Eyebrow>
          <SectionHeading className="mt-4">Straight from LinkedIn.</SectionHeading>
          <div className="mt-5">
            <Lede>
              Recaps, posters and the occasional honest breakdown. Follow along and you will always
              know where the next session is.
            </Lede>
          </div>
        </div>
        <a
          href={links.linkedinCompany}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-pill border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink/[0.03]"
        >
          Follow on LinkedIn
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        {featured?.embedUrn && (
          <LinkedInEmbed urn={featured.embedUrn} title={`${featured.author} on LinkedIn`} />
        )}

        <div className="grid gap-6">
          {cards.map((p) => (
            <figure key={p.excerpt} className="flex flex-col rounded-card border border-line bg-paper p-7">
              <blockquote className="font-display text-lg leading-relaxed text-ink">
                “{p.excerpt}”
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between gap-4 text-sm">
                <span>
                  <span className="font-semibold text-ink">{p.author}</span>
                  <span className="text-ink-faint"> · {p.when}</span>
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ember-ink hover:underline"
                >
                  View post →
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
