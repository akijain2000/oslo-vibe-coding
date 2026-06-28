import Link from "next/link";
import { Eyebrow } from "../Section";
import ResourceVisual from "./ResourceVisual";
import ResourceSectionNav from "./ResourceSectionNav";
import { resourceSections, resourceSlug, type Resource } from "@/content/resources";
import { getExplainer } from "@/content/explainers";
import { ui, sectionMeta, localePath, type Locale } from "@/lib/i18n";
import { links } from "@/content/links";

// The index is for scanning and routing, so each item shows a one-line gloss
// (its first sentence); the full explainer lives on the per-resource page.
const firstSentence = (s: string) => {
  const m = s.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : s).trim();
};

export default function ResourcesIndex({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const readMore = locale === "no" ? "Les mer" : "Read more";
  const comeToSession = locale === "no" ? "Eller bare kom på en samling" : "Or just come to a session";

  const gloss = (item: Resource) => firstSentence(getExplainer(locale, resourceSlug(item.title))?.lead ?? item.tldr);
  const href = (item: Resource) => localePath(locale, `/resources/${resourceSlug(item.title)}`);

  const navSections = resourceSections.map((s) => ({
    id: s.id,
    title: sectionMeta[locale][s.id].title,
    count: s.items.length,
  }));

  return (
    <>
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <Eyebrow dark>{t.resourcesEyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {t.resourcesTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">{t.resourcesIntro}</p>
          <a
            href={links.luma}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
          >
            {comeToSession}
            <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      <ResourceSectionNav sections={navSections} label={t.onThisPage} />

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="space-y-20">
          {resourceSections.map((section) => {
            const meta = sectionMeta[locale][section.id];
            return (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <div className="flex items-baseline gap-3">
                  <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{meta.title}</h2>
                  <span className="font-mono text-sm text-ink-faint">{section.items.length}</span>
                </div>
                <p className="mt-2 max-w-2xl text-ink-soft">{meta.intro}</p>

                {section.layout === "list" ? (
                  <ul className="mt-7 divide-y divide-line border-t border-line">
                    {section.items.map((item) => (
                      <li key={item.title}>
                        <Link href={href(item)} className="group flex items-center gap-4 py-4">
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline gap-x-2.5">
                              <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
                                {item.title}
                              </h3>
                              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                                {item.by}
                              </span>
                            </div>
                            <p className="mt-1 truncate text-sm text-ink-soft">{gloss(item)}</p>
                          </div>
                          <span
                            aria-hidden
                            className="shrink-0 text-ember-ink transition-transform group-hover:translate-x-0.5"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={href(item)}
                        className="group flex flex-col overflow-hidden rounded-card border border-line bg-mist transition-colors hover:border-ink/20"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-night">
                          <ResourceVisual item={item} />
                          {section.id === "tools" && (
                            <span className="absolute right-3 top-3 rounded-pill bg-night/75 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-paper backdrop-blur-sm">
                              {item.free ? t.free : t.paid}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{item.by}</p>
                          <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
                            {item.title}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft line-clamp-2">
                            {gloss(item)}
                          </p>
                          <span className="mt-4 inline-block text-sm font-semibold text-ember-ink">
                            {readMore} <span aria-hidden>→</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <div className="mt-20 rounded-card border border-line bg-mist p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">{t.ctaBody}</p>
          <a
            href={links.luma}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#26242f]"
          >
            {t.rsvp}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </>
  );
}
