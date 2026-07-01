import Link from "next/link";
import { notFound } from "next/navigation";
import SparkMark from "../SparkMark";
import { FrontierDiagram } from "./FrontierDiagrams";
import { getLectureBySlug, youtubeUrl, course } from "@/content/frontier";
import { links } from "@/content/links";

// One lecture study guide: the concept diagram, the big idea, themed sections,
// takeaways, a short glossary, verbatim quotes, and a link to watch the source.
export default function FrontierLecture({ slug }: { slug: string }) {
  const l = getLectureBySlug(slug);
  if (!l) notFound();

  return (
    <>
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
          <Link
            href="/frontier"
            className="font-mono text-xs uppercase tracking-wider text-cream-dim transition-colors hover:text-glow"
          >
            ← All lectures
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-glow">
            {course.code} · Lecture {l.n}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            {l.title}
          </h1>
          <p className="mt-4 text-lg text-cream-dim">
            <span className="font-semibold text-paper">{l.speaker}</span> · {l.role}, {l.org}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-cream-dim/70">
            <span>{l.minutes} min read</span>
            <span aria-hidden>·</span>
            <span>Guest lecture</span>
            <span aria-hidden>·</span>
            <span>Free</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-night">
          <FrontierDiagram spec={l.diagram} />
        </div>

        <p className="mt-6 font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
          {l.lead}
        </p>

        <div className="mt-10 rounded-card border border-ember/25 bg-ember/[0.06] p-6 sm:p-7">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ember-ink">
            <SparkMark className="h-3.5 w-3.5" />
            The big idea
          </div>
          <p className="mt-3 text-lg leading-relaxed text-ink">{l.bigIdea}</p>
        </div>

        <div className="mt-12 space-y-10">
          {l.themes.map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-2xl font-bold tracking-tight">{s.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{s.body}</p>
            </section>
          ))}
        </div>

        {l.takeaways.length > 0 && (
          <div className="mt-12 rounded-card border border-line bg-mist p-6 sm:p-7">
            <div className="font-mono text-xs uppercase tracking-wider text-ink-faint">Key takeaways</div>
            <ul className="mt-4 space-y-2.5">
              {l.takeaways.map((k, i) => (
                <li key={i} className="flex gap-3 text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span className="leading-relaxed">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {l.quotes.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold tracking-tight">In their words</h2>
            <div className="mt-5 space-y-5">
              {l.quotes.map((q, i) => (
                <figure key={i} className="border-l-2 border-ember pl-5">
                  <blockquote className="font-display text-xl font-medium leading-relaxed text-ink">
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                    {q.speaker}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {l.glossary.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold tracking-tight">Terms to know</h2>
            <dl className="mt-5 divide-y divide-line border-t border-line">
              {l.glossary.map((g, i) => (
                <div key={i} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="font-display font-semibold text-ink">{g.term}</dt>
                  <dd className="text-ink-soft">{g.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <a
          href={youtubeUrl(l.youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-pill bg-ember px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
        >
          Watch the full lecture <span aria-hidden>↗</span>
        </a>
        <p className="mt-3 text-sm text-ink-faint">
          {l.speaker} at {course.school} {course.code}: {course.name}
        </p>

        <div className="mt-14 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">New to this? Come build with us.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            Reading is good. Building with people is better. Our drop-ins are free and open to total
            beginners.
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
              href="/frontier"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              All lectures
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
