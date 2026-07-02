import { brand, SITE_URL } from "@/lib/brand";
import { links } from "@/content/links";
import { organisers } from "@/content/people";
import { course } from "@/content/frontier";
import { absoluteUrl, type Locale } from "@/lib/i18n";
import type { EventItem } from "@/content/events";
import type { Article } from "@/content/articles";
import type { Lecture } from "@/content/frontier";
import type { FlatResource } from "@/content/resources";

// Helper: render a JSON-LD block. Data is ours (not user input), so this is safe.
function Ld({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Stable, fetchable assets. The root /opengraph-image serves at a clean 200 URL
// (unlike the hashed per-page OG routes, which 404 at their un-hashed path), so
// it is safe to reference from schema. icon-512 is the large logo Google wants.
const OG_IMAGE = { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 };
const LOGO = { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 };

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const personId = (name: string) => `${SITE_URL}/#person-${slugify(name)}`;

// Resolve an author name to the right schema reference: the org, a known
// organiser Person entity, or a bare Person node.
function authorRef(name: string) {
  if (name === brand.name) return { "@id": `${SITE_URL}/#org` };
  const p = organisers.find((o) => o.name === name);
  if (p) return { "@id": personId(p.name) };
  return { "@type": "Person", name };
}

// Organization + WebSite + the organiser Person entities — emitted once,
// site-wide (in the layout).
export function SiteJsonLd() {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["Organization", "NGO"],
            "@id": `${SITE_URL}/#org`,
            name: brand.name,
            alternateName: "Vibe Coding Oslo",
            url: SITE_URL,
            logo: LOGO,
            image: OG_IMAGE,
            description: brand.description,
            foundingDate: brand.founded,
            nonprofitStatus: "Nonprofit",
            areaServed: "Oslo, Norway",
            knowsAbout: [...brand.keywords],
            location: {
              "@type": "Place",
              name: "Oslo",
              address: { "@type": "PostalAddress", addressLocality: "Oslo", addressCountry: "NO" },
            },
            founder: organisers.map((p) => ({ "@id": personId(p.name) })),
            member: organisers.map((p) => ({ "@id": personId(p.name) })),
            sameAs: [links.linkedinCompany, links.github],
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: brand.name,
            description: brand.description,
            inLanguage: ["en", "nb-NO"],
            publisher: { "@id": `${SITE_URL}/#org` },
          },
          ...organisers.map((p) => ({
            "@type": "Person",
            "@id": personId(p.name),
            name: p.name,
            jobTitle: p.role,
            description: p.bio,
            url: p.linkedin,
            sameAs: [p.linkedin],
            memberOf: { "@id": `${SITE_URL}/#org` },
          })),
        ],
      }}
    />
  );
}

// Event — emitted on the home page for the next session. Helps it show up
// as a rich result and in event listings.
export function EventJsonLd({ event }: { event: EventItem }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Event",
        name: event.title,
        startDate: event.start,
        endDate: event.end,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        isAccessibleForFree: true,
        description: event.blurb,
        image: OG_IMAGE,
        url: event.rsvpUrl ?? SITE_URL,
        location: {
          "@type": "Place",
          name: event.venue,
          address: { "@type": "PostalAddress", streetAddress: event.address, addressLocality: event.city, addressCountry: "NO" },
        },
        organizer: { "@id": `${SITE_URL}/#org` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NOK",
          availability: "https://schema.org/InStock",
          url: event.rsvpUrl ?? SITE_URL,
        },
      }}
    />
  );
}

// Article — emitted on each /articles/[slug] page for rich results.
export function ArticleJsonLd({ article }: { article: Article }) {
  const url = `${SITE_URL}/articles/${article.slug}`;
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.dek,
        author: authorRef(article.author),
        datePublished: article.datePublished,
        publisher: { "@id": `${SITE_URL}/#org` },
        mainEntityOfPage: url,
        image: OG_IMAGE,
        inLanguage: "en",
        timeRequired: `PT${article.readingTimeMin}M`,
        ...(article.about ? { about: article.about } : {}),
        keywords: article.keywords ?? brand.keywords.slice(0, 4),
        ...(article.series
          ? {
              isPartOf: {
                "@type": "CreativeWorkSeries",
                "@id": `${SITE_URL}/llms#series`,
                name: article.series.name,
              },
              position: article.series.part,
            }
          : {}),
        url,
      }}
    />
  );
}

// LearningResource — emitted on each /frontier/[slug] lecture study guide,
// tied to the CS 153 Course it distills.
export function LectureJsonLd({ lecture }: { lecture: Lecture }) {
  const url = `${SITE_URL}/frontier/${lecture.slug}`;
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: `${lecture.title} — ${lecture.speaker}`,
        description: lecture.lead,
        learningResourceType: "Lecture notes",
        about: `${course.school} ${course.code}: ${course.name}`,
        isPartOf: {
          "@type": "Course",
          name: `${course.school} ${course.code}: ${course.name}`,
          courseCode: course.code,
          url: course.url,
          provider: { "@type": "CollegeOrUniversity", name: course.school },
        },
        creator: { "@type": "Person", name: lecture.speaker },
        publisher: { "@id": `${SITE_URL}/#org` },
        isBasedOn: `https://www.youtube.com/watch?v=${lecture.youtubeId}`,
        inLanguage: "en",
        timeRequired: `PT${lecture.minutes}M`,
        isAccessibleForFree: true,
        mainEntityOfPage: url,
        image: OG_IMAGE,
        url,
      }}
    />
  );
}

// Course entity for the whole Stanford CS 153 set — emitted on /frontier.
export function Cs153CourseJsonLd() {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": `${SITE_URL}/frontier#course`,
        name: `${course.school} ${course.code}: ${course.name}`,
        courseCode: course.code,
        description:
          "Study guides distilled from all 13 guest lectures of Stanford's CS 153 (Frontier Systems), from Satya Nadella and Sam Altman to Jensen Huang.",
        url: `${SITE_URL}/frontier`,
        inLanguage: "en",
        isAccessibleForFree: true,
        provider: { "@type": "CollegeOrUniversity", name: course.school, url: course.url },
        publisher: { "@id": `${SITE_URL}/#org` },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT13H",
          url: course.playlistUrl,
        },
      }}
    />
  );
}

// Resource detail schema: first-party courses (the "build" section) get Course;
// everything else a LearningResource pointing at the original source.
export function ResourceJsonLd({
  resource,
  locale,
  title,
  description,
}: {
  resource: FlatResource;
  locale: Locale;
  title: string;
  description: string;
}) {
  const url = absoluteUrl(locale, `/resources/${resource.slug}`);
  const inLanguage = locale === "no" ? "nb-NO" : "en";
  const isCourse = resource.sectionId === "build";
  const data = isCourse
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: title,
        description,
        url,
        inLanguage,
        isAccessibleForFree: resource.free,
        learningResourceType: "Course",
        provider: { "@id": `${SITE_URL}/#org` },
        author: authorRef(resource.by),
        sameAs: resource.url,
      }
    : {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: title,
        description,
        url,
        inLanguage,
        isAccessibleForFree: resource.free,
        creator: { "@type": "Person", name: resource.by },
        publisher: { "@id": `${SITE_URL}/#org` },
        sameAs: resource.url,
      };
  return <Ld data={data} />;
}

// BreadcrumbList — the site hierarchy for a detail page. `items` are ordered
// crumbs; each `path` is locale-relative (absoluteUrl adds the /no prefix).
export function BreadcrumbJsonLd({
  items,
  locale = "en",
}: {
  items: { name: string; path: string }[];
  locale?: Locale;
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: absoluteUrl(locale, it.path),
        })),
      }}
    />
  );
}

// CollectionPage + ItemList — for the /articles, /frontier, /resources hubs.
// Thin list items (name + url only) so we don't duplicate detail-page prose.
export function CollectionPageJsonLd({
  name,
  description,
  path,
  items,
  locale = "en",
}: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
  locale?: Locale;
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url: absoluteUrl(locale, path),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: items.length,
          itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.name,
            url: absoluteUrl(locale, it.path),
          })),
        },
      }}
    />
  );
}

// FAQPage — mirror of a visible Q&A block. Only use where the questions and
// answers actually render on the page.
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      }}
    />
  );
}

// DefinedTermSet — serializes a lecture's existing glossary as structured terms.
export function DefinedTermSetJsonLd({ lecture }: { lecture: Lecture }) {
  const url = `${SITE_URL}/frontier/${lecture.slug}`;
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: `${lecture.title} — glossary`,
        url,
        hasDefinedTerm: lecture.glossary.map((g) => ({
          "@type": "DefinedTerm",
          name: g.term,
          description: g.def,
          inDefinedTermSet: url,
        })),
      }}
    />
  );
}
