import Link from "next/link";
import { notFound } from "next/navigation";
import ResourceVisual from "./ResourceVisual";
import SparkMark from "../SparkMark";
import { getResourceBySlug } from "@/content/resources";
import { getExplainer, readingMinutes } from "@/content/explainers";
import { ui, sectionMeta, localePath, type Locale } from "@/lib/i18n";
import { links } from "@/content/links";

export default function ResourceExplainer({ locale, slug }: { locale: Locale; slug: string }) {
  const r = getResourceBySlug(slug);
  const e = getExplainer(locale, slug);
  if (!r || !e) notFound();
  const t = ui[locale];
  const section = sectionMeta[locale][r.sectionId];

  return (
    <>
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
          <Link
            href={localePath(locale, `/resources#${r.sectionId}`)}
            className="font-mono text-xs uppercase tracking-wider text-cream-dim transition-colors hover:text-glow"
          >
            ← {t.back}
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-glow">{section?.title}</p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            {r.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-cream-dim/70">
            <span>{r.by}</span>
            <span aria-hidden>·</span>
            <span>{t.readingTime(readingMinutes(e))}</span>
            {r.free && (
              <>
                <span aria-hidden>·</span>
                <span>{t.free}</span>
              </>
            )}
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-night">
          <ResourceVisual item={r} />
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink-faint">{t.tldrNote}</p>

        <p className="mt-6 font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">{e.lead}</p>

        <div className="mt-10 space-y-10">
          {e.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-2xl font-bold tracking-tight">{s.heading}</h2>
              <div className="mt-4 space-y-4">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-lg leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {e.keyPoints.length > 0 && (
          <div className="mt-12 rounded-card border border-ember/25 bg-ember/[0.06] p-6 sm:p-7">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ember-ink">
              <SparkMark className="h-3.5 w-3.5" />
              {t.keyPoints}
            </div>
            <ul className="mt-4 space-y-2.5">
              {e.keyPoints.map((k, i) => (
                <li key={i} className="flex gap-3 text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span className="leading-relaxed">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <a
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-pill bg-ember px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
        >
          {t.openSource} <span aria-hidden>↗</span>
        </a>
        <p className="mt-3 text-sm text-ink-faint">{r.by}</p>

        <div className="mt-14 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">{t.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">{t.ctaBody}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              {t.rsvp}
            </a>
            <Link
              href={localePath(locale, "/resources")}
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              {t.browseAll}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
