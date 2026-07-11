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
  title,
  href,
  summary,
  readMore,
  badge,
  inCarousel,
}: {
  item: Resource;
  title: string;
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
        <ResourceVisual item={item} alt={item.image ? `${title} preview` : ""} />
        {badge && (
          <span className="absolute right-3 top-3 rounded-pill bg-night/75 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-paper backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{item.by}</p>
        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug group-hover:text-ember-ink">
          {title}
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
  const journeyCopy = locale === "no"
    ? {
        heading: "Finn riktig sted å begynne",
        intro: "Start med det grunnleggende, bruk hele biblioteket, eller gå rett til frontier-materialet.",
        groups: [
          {
            title: "Start her",
            body: "For deg som vil forstå konseptet, velge ett verktøy og lage noe for første gang.",
            links: [
              { label: "Guide til første bygg", href: "/no/kom-i-gang" },
              { label: "Hva er vibe coding?", href: "/no/hva-er-vibe-coding" },
              { label: "Startverktøy", href: "#tools" },
            ],
          },
          {
            title: "Hele biblioteket",
            body: "Verktøy, gratis kurs, fordypning, agenter, skills og andre steder å lære i Oslo.",
            links: [
              { label: "Gratis kurs", href: "#courses" },
              { label: "Agenter og skills", href: "#build" },
              { label: "Artikler + LLM-guide (EN)", href: "/articles" },
            ],
          },
          {
            title: "Frontier",
            body: "Notater, forskning og gjesteforelesninger om systemene som former moderne KI.",
            links: [
              { label: "Frontier Systems-notater (EN)", href: "/frontier" },
              { label: "Forskningen bak kurset", href: "#frontier" },
              { label: "Gjesteforelesninger", href: "#guest-lectures" },
            ],
          },
        ],
      }
    : {
        heading: "Find the right place to begin",
        intro: "Start with the essentials, browse the complete library, or go straight to the frontier material.",
        groups: [
          {
            title: "Start here",
            body: "For understanding the idea, choosing one tool, and making something for the first time.",
            links: [
              { label: "First-build guide", href: "/start" },
              { label: "What is vibe coding?", href: "/what-is-vibe-coding" },
              { label: "Starter tools", href: "#tools" },
            ],
          },
          {
            title: "The full library",
            body: "Tools, free courses, deeper learning, agents, skills, articles, and other places to learn in Oslo.",
            links: [
              { label: "Free courses", href: "#courses" },
              { label: "Agents and skills", href: "#build" },
              { label: "Articles + LLM primer", href: "/articles" },
            ],
          },
          {
            title: "Frontier",
            body: "Notes, research, and guest lectures about the people and systems shaping modern AI.",
            links: [
              { label: "Frontier Systems notes", href: "/frontier" },
              { label: "Papers behind the course", href: "#frontier" },
              { label: "Guest-lecture resources", href: "#guest-lectures" },
            ],
          },
        ],
      };

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

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{journeyCopy.heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{journeyCopy.intro}</p>
          </div>

          <div className="mt-10 grid gap-10 border-y border-line py-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
            {journeyCopy.groups.map((group) => (
              <section key={group.title} className="md:px-7 md:first:pl-0 md:last:pr-0">
                <h3 className="font-display text-2xl font-bold tracking-tight">{group.title}</h3>
                <p className="mt-3 min-h-[4.5rem] leading-relaxed text-ink-soft">{group.body}</p>
                <div className="mt-5 grid">
                  {group.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center justify-between gap-4 border-b border-line py-3 text-sm font-semibold text-ink transition-colors hover:border-ember"
                    >
                      {item.label}
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

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
                title={locale === "no" ? item.titleNo ?? item.title : item.title}
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
