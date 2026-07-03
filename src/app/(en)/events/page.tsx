import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { EventJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { events, upcomingEvent, pastEvents } from "@/content/events";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

const DESCRIPTION =
  "Past and upcoming Oslo Vibe Coding sessions: free, drop-in AI coding meetups around Oslo. Recurring, always free, beginners welcome.";

export const metadata: Metadata = {
  title: "Events: free AI coding meetups in Oslo",
  description: DESCRIPTION,
  alternates: { canonical: "/events", languages: { en: "/events", "x-default": "/events" } },
  openGraph: {
    title: "Events · Oslo Vibe Coding",
    description: DESCRIPTION,
    url: `${SITE_URL}/events`,
  },
};

export default function EventsPage() {
  return (
    <>
      {events.map((e) => (
        <EventJsonLd key={e.slug} event={e} />
      ))}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Eyebrow dark>Recurring, always free</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Our sessions
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">{DESCRIPTION}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight">Next up</h2>
          {upcomingEvent ? (
            <Link
              href={`/events/${upcomingEvent.slug}`}
              className="group mt-5 block rounded-card border border-ember/30 bg-ember/[0.06] p-6 transition-colors hover:border-ember/50 sm:p-7"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-ember-ink">
                {upcomingEvent.dateLabel} · {upcomingEvent.timeLabel}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight group-hover:text-ember-ink">
                {upcomingEvent.title}
              </h3>
              <p className="mt-1 text-ink-soft">{upcomingEvent.venue}</p>
            </Link>
          ) : (
            <div className="mt-5 rounded-card border border-line bg-mist p-6 sm:p-7">
              <p className="text-ink-soft">
                We&apos;re between sessions right now. The next date always lands on{" "}
                <a href={links.luma} target="_blank" rel="noopener noreferrer" className="font-semibold text-ember-ink hover:underline">
                  Luma
                </a>{" "}
                first, so join there or on{" "}
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-ember-ink hover:underline">
                  WhatsApp
                </a>{" "}
                to hear when it&apos;s set.
              </p>
            </div>
          )}
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight">Past sessions</h2>
          <div className="mt-5 space-y-4">
            {pastEvents.map((e) => (
              <Link
                key={e.slug}
                href={`/events/${e.slug}`}
                className="group block rounded-card border border-line bg-mist p-6 transition-colors hover:border-ink/20"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  {e.dateLabel} · {e.venue}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight group-hover:text-ember-ink">
                  {e.title}
                </h3>
                {e.recap && <p className="mt-1.5 leading-relaxed text-ink-soft">{e.recap}</p>}
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-14 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Catch the next one.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">Free and open to total beginners.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              RSVP on Luma
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              Join WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
