import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EventJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { events, getEventBySlug } from "@/content/events";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getEventBySlug(slug);
  if (!e) return {};
  const path = `/events/${slug}`;
  const description = `${e.dateLabel} at ${e.venue}, Oslo. ${e.blurb}`;
  return {
    title: `${e.title} — ${e.dateLabel}`,
    description,
    alternates: { canonical: path, languages: { en: path, "x-default": path } },
    openGraph: { type: "article", title: `${e.title} · Oslo Vibe Coding`, description, url: `${SITE_URL}${path}` },
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEventBySlug(slug);
  if (!e) notFound();

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.venue}, ${e.address}`)}`;
  const isPast = e.status === "past";

  return (
    <>
      <EventJsonLd event={e} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: e.title, path: `/events/${e.slug}` },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Link
            href="/events"
            className="font-mono text-xs uppercase tracking-wider text-cream-dim transition-colors hover:text-glow"
          >
            ← All events
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-glow">
            {isPast ? "Past session" : "Upcoming session"}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            {e.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-cream-dim">{e.blurb}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">Date</dt>
            <dd className="mt-1 font-display text-lg font-semibold">{e.dateLabel.replace(" 2026", "")}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">Time</dt>
            <dd className="mt-1 font-display text-lg font-semibold">{e.timeLabel}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">Cost</dt>
            <dd className="mt-1 font-display text-lg font-semibold">Free</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">Who</dt>
            <dd className="mt-1 font-display text-lg font-semibold">Everyone</dd>
          </div>
        </dl>

        <div className="mt-8 rounded-card border border-line bg-mist p-5">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Where</p>
          <p className="mt-1 font-display text-lg font-semibold">{e.venue}</p>
          <p className="text-ink-soft">{e.address}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-ink hover:underline"
          >
            Open in Maps <span aria-hidden>→</span>
          </a>
        </div>

        {e.recap && (
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">How it went</p>
            <p className="mt-2 text-lg leading-relaxed text-ink-soft">{e.recap}</p>
            {e.recapHref && (
              <Link
                href={e.recapHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ember-ink hover:underline"
              >
                {e.recapLabel ?? "Read what happened at this session"}<span aria-hidden>→</span>
              </Link>
            )}
          </div>
        )}

        <div className="mt-12 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {isPast ? "Catch the next one." : "Save your spot."}
          </h2>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={e.rsvpUrl ?? links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              RSVP on Luma
            </a>
            <Link
              href="/events"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              See all sessions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
