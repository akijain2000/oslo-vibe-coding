import { brand, SITE_URL } from "@/lib/brand";
import { links } from "@/content/links";
import type { EventItem } from "@/content/events";

// Helper: render a JSON-LD block. Data is ours (not user input), so this is safe.
function Ld({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization + WebSite — emitted once, site-wide (in the layout).
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
            logo: `${SITE_URL}/icon.png`,
            description: brand.description,
            foundingDate: brand.founded,
            nonprofitStatus: "Nonprofit",
            areaServed: "Oslo, Norway",
            location: {
              "@type": "Place",
              name: "Oslo",
              address: { "@type": "PostalAddress", addressLocality: "Oslo", addressCountry: "NO" },
            },
            sameAs: [links.linkedinCompany, links.github],
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: brand.name,
            description: brand.description,
            inLanguage: "en",
            publisher: { "@id": `${SITE_URL}/#org` },
          },
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
        name: `${event.title} · ${brand.name}`,
        startDate: event.start,
        endDate: event.end,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        isAccessibleForFree: true,
        description: event.blurb,
        image: `${SITE_URL}/opengraph-image`,
        url: event.rsvpUrl ?? SITE_URL,
        location: {
          "@type": "Place",
          name: event.venue,
          address: { "@type": "PostalAddress", streetAddress: event.address, addressLocality: event.city, addressCountry: "NO" },
        },
        organizer: { "@type": "Organization", name: brand.name, url: SITE_URL },
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
