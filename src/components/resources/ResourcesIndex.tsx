import Link from "next/link";
import { Eyebrow } from "../Section";
import Carousel from "../Carousel";
import ResourceVisual from "./ResourceVisual";
import ResourceSectionNav from "./ResourceSectionNav";
import { resourceSections, resourceSlug, type Resource } from "@/content/resources";
import { getExplainer } from "@/content/explainers";
import { ui, sectionMeta, localePath, type Locale } from "@/lib/i18n";
import { links } from "@/content/links";

// One image card. The same card renders in both the 2-col grids and the
// swipeable carousels; `inCarousel` just gives it a fixed width to snap to.
function ResourceCard({
  item,
  href,
  summary,
  readMore,
  badge,
  inCarousel,
}: {
  item: Resource;
  href: string;
  summary: string;
  readMore: string;
  badge: string | null;
  inCarousel: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col overflow-hidden rounded-card border border-line bg-mist transition-colors hover:border-ink/20 ${
        inCarousel ? "w-[280px] shrink-0 snap-start sm:w-[320px]" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-night">
        <ResourceVisual item={item} />
        {badge && (
          <span className="absolute right-3 top-3 rounded-pill bg-night/75 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-paper backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{item.by}</p>
        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft line-clamp-2">{summary}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-ember-ink">
          {readMore} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

export default function ResourcesIndex({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const readMore = locale === "no" ? "Les mer" : "Read more";
  const comeToSession = locale === "no" ? "Eller bare kom på en samling" : "Or just come to a session";

  const summaryOf = (item: Resource) => getExplainer(locale, resourceSlug(item.title))?.lead ?? item.tldr;
  const hrefOf = (item: Resource) => localePath(locale, `/resources/${resourceSlug(item.title)}`);
  const badgeOf = (sectionId: string, item: Resource) =>
    sectionId === "tools" ? (item.free ? t.free : t.paid) : null;

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
            const isCarousel = section.layout === "carousel";

            const heading = (
              <div className="max-w-2xl">
                <div className="flex items-baseline gap-3">
                  <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{meta.title}</h2>
                  <span className="font-mono text-sm text-ink-faint">{section.items.length}</span>
                </div>
                <p className="mt-2 text-ink-soft">{meta.intro}</p>
              </div>
            );

            const cards = section.items.map((item) => (
              <ResourceCard
                key={item.title}
                item={item}
                href={hrefOf(item)}
                summary={summaryOf(item)}
                readMore={readMore}
                badge={badgeOf(section.id, item)}
                inCarousel={isCarousel}
              />
            ));

            return (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                {isCarousel ? (
                  <Carousel ariaLabel={meta.title} header={heading}>
                    {cards}
                  </Carousel>
                ) : (
                  <>
                    {heading}
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">{cards}</div>
                  </>
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
