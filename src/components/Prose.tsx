import SparkMark from "./SparkMark";

type Link = { label: string; url: string };

export type ProseSectionData = {
  id?: string;
  heading: string;
  paragraphs: string[];
  pullquote?: string;
  bullets?: string[];
  links?: Link[];
};

export default function Prose({ section }: { section: ProseSectionData }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{section.heading}</h2>

      <div className="mt-5 space-y-5">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </div>

      {section.pullquote ? (
        <blockquote className="my-8 border-l-2 border-ember pl-5">
          <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
            {section.pullquote}
          </p>
        </blockquote>
      ) : null}

      {section.bullets && section.bullets.length > 0 ? (
        <ul className="mt-5 space-y-2.5">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-ink-soft">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.links && section.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2.5">
          {section.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-mist px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-ink/20"
            >
              <SparkMark className="h-3.5 w-3.5 text-ember" />
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}
