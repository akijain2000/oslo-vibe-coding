import Image from "next/image";
import { Section, Eyebrow } from "./Section";
import CTAButton from "./CTAButton";
import { upcomingEvent } from "@/content/events";
import { links } from "@/content/links";

const detail = (label: string, value: string) => (
  <div>
    <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">{label}</dt>
    <dd className="mt-1 font-display text-lg font-semibold text-ink">{value}</dd>
  </div>
);

export default function NextEvent() {
  if (!upcomingEvent) return null;
  const e = upcomingEvent;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${e.venue}, ${e.address}`,
  )}`;

  return (
    <Section id="next" tone="mist">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        {/* details */}
        <div>
          <Eyebrow>The next session</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {e.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{e.blurb}</p>

          <dl className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {detail("Date", e.dateLabel.replace(" 2026", ""))}
            {detail("Time", e.timeLabel)}
            {detail("Cost", "Free")}
            {detail("Who", "Everyone")}
          </dl>

          <div className="mt-8 rounded-card border border-line bg-paper p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Where</p>
            <p className="mt-1 font-display text-lg font-semibold">{e.venue}</p>
            <p className="text-ink-soft">{e.address}</p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-ink hover:underline"
            >
              Open in Maps
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Bring</p>
            <p className="mt-2 text-ink-soft">
              A laptop, an idea if you have one, and a willingness to vibe. That is the whole list.
            </p>
          </div>
        </div>

        {/* ticket card */}
        <div className="rounded-card bg-night p-7 text-paper">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-glow">Save your spot</p>
          <p className="mt-2 text-cream-dim">
            Free, but an RSVP helps us plan seating.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-3 text-center">
              <Image
                src="/assets/qr-luma.png"
                alt="QR code to RSVP for the session on Luma"
                width={120}
                height={120}
                className="mx-auto h-auto w-full [image-rendering:pixelated]"
              />
              <p className="mt-2 text-xs font-semibold text-ink">Scan to RSVP</p>
            </div>
            <div className="rounded-2xl bg-white p-3 text-center">
              <Image
                src="/assets/qr-whatsapp.png"
                alt="QR code to join the WhatsApp community"
                width={120}
                height={120}
                className="mx-auto h-auto w-full [image-rendering:pixelated]"
              />
              <p className="mt-2 text-xs font-semibold text-ink">Join WhatsApp</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <CTAButton href={links.luma} external variant="ember" className="w-full">
              RSVP on Luma
            </CTAButton>
            <CTAButton href={links.whatsapp} external variant="ghost-dark" className="w-full">
              WhatsApp community
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
