import Link from "next/link";
import { Eyebrow } from "../Section";
import { FrontierDiagram } from "./FrontierDiagrams";
import { lectures, course } from "@/content/frontier";
import { links } from "@/content/links";

// The Frontier Systems series landing page: a hero that frames the course, then
// the 13 guest lectures as concept-diagram cards linking to each study guide.
// English only, matching the site's articles/start pages.
export default function FrontierIndex() {
  return (
    <>
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <Eyebrow dark>Learning aids</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            The frontier, distilled.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
            {course.school}&apos;s {course.code}: {course.name} put the people building modern AI in
            one room, from Satya Nadella and Sam Altman to Jensen Huang. We went through all{" "}
            {lectures.length} guest lectures and turned each into a short study guide: the big idea,
            the specifics, a few quotes, and a diagram. Read them here, or watch the talks on your
            own time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={course.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              Watch the lectures <span aria-hidden>↗</span>
            </a>
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              The course <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lectures.map((l) => (
            <Link
              key={l.slug}
              href={`/frontier/${l.slug}`}
              className="group flex flex-col overflow-hidden rounded-card border border-line bg-mist transition-colors hover:border-ink/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-night">
                <FrontierDiagram spec={l.diagram} />
                <span className="absolute right-3 top-3 rounded-pill bg-night/75 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-paper backdrop-blur-sm">
                  {l.minutes} min
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Lecture {l.n} · {l.speaker}
                </p>
                <h2 className="mt-1.5 font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
                  {l.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft line-clamp-2">
                  {l.oneLiner}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-ember-ink">
                  Read the notes <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-card border border-line bg-mist p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Want to actually build with this?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Reading about the frontier is one thing. Our drop-in sessions are free, in the open, and
            genuinely beginner-friendly. Bring a laptop and an idea.
          </p>
          <a
            href={links.luma}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#26242f]"
          >
            Come to a session <span aria-hidden>→</span>
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-ink-faint">
          Notes distilled by Oslo Vibe Coding from the public {course.school} {course.code} lectures.
          Every quote and figure is the speaker&apos;s own.{" "}
          <Link href="/resources#frontier" className="font-medium text-ember-ink hover:underline">
            The papers behind the course →
          </Link>
        </p>
      </div>
    </>
  );
}
