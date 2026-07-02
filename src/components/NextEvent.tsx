import Image from "next/image";
import { Section, Eyebrow } from "./Section";
import CTAButton from "./CTAButton";
import { upcomingEvent } from "@/content/events";
import { brand } from "@/lib/brand";
import { links } from "@/content/links";

const copy = {
  en: {
    eyebrow: "The next session",
    dateLabel: "Date",
    timeLabel: "Time",
    costLabel: "Cost",
    costValue: "Free",
    whoLabel: "Who",
    whoValue: "Everyone",
    whereLabel: "Where",
    openInMaps: "Open in Maps",
    bringLabel: "Bring",
    bringBody:
      "A laptop, an idea if you have one, and a willingness to vibe. That is the whole list.",
    saveYourSpot: "Save your spot",
    rsvpHelps: "Free, but an RSVP helps us plan seating.",
    lumaQrAlt: "QR code to RSVP for the session on Luma",
    whatsappQrAlt: "QR code to join the WhatsApp community",
    scanToRsvp: "Scan to RSVP",
    joinWhatsapp: "Join WhatsApp",
    rsvpOnLuma: "RSVP on Luma",
    whatsappCommunity: "WhatsApp community",
    betweenTitle: "We're between sessions right now",
    betweenBody:
      "The next date always lands on Luma first. Join there or on WhatsApp and you'll be the first to know when it's set.",
    betweenWhen: "Roughly weekly, always free",
  },
  no: {
    eyebrow: "Neste samling",
    dateLabel: "Dato",
    timeLabel: "Tid",
    costLabel: "Pris",
    costValue: "Gratis",
    whoLabel: "Hvem",
    whoValue: "Alle",
    whereLabel: "Hvor",
    openInMaps: "Åpne i Maps",
    bringLabel: "Ta med",
    bringBody:
      "En laptop, en idé hvis du har en, og lyst til å vibe. Det er hele listen.",
    saveYourSpot: "Sikre deg en plass",
    rsvpHelps: "Gratis, men en RSVP hjelper oss å planlegge sitteplasser.",
    lumaQrAlt: "QR-kode for å melde deg på samlingen på Luma",
    whatsappQrAlt: "QR-kode for å bli med i WhatsApp-fellesskapet",
    scanToRsvp: "Skann for å melde deg på",
    joinWhatsapp: "Bli med på WhatsApp",
    rsvpOnLuma: "Meld deg på på Luma",
    whatsappCommunity: "WhatsApp-fellesskap",
    betweenTitle: "Vi er mellom samlinger akkurat nå",
    betweenBody:
      "Neste dato dukker alltid opp på Luma først. Bli med der eller på WhatsApp, så er du blant de første som får vite det.",
    betweenWhen: "Omtrent ukentlig, alltid gratis",
  },
} as const;

const detail = (label: string, value: string) => (
  <div>
    <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">{label}</dt>
    <dd className="mt-1 font-display text-lg font-semibold text-ink">{value}</dd>
  </div>
);

export default function NextEvent({ locale = "en" }: { locale?: "en" | "no" }) {
  const e = upcomingEvent;
  const t = copy[locale];
  const mapsUrl = e
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.venue}, ${e.address}`)}`
    : "";

  return (
    <Section id="next" tone="mist">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        {/* details */}
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>

          {e ? (
            <>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {e.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{e.blurb}</p>

              <dl className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {detail(t.dateLabel, e.dateLabel.replace(" 2026", ""))}
                {detail(t.timeLabel, e.timeLabel)}
                {detail(t.costLabel, t.costValue)}
                {detail(t.whoLabel, t.whoValue)}
              </dl>

              <div className="mt-8 rounded-card border border-line bg-paper p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{t.whereLabel}</p>
                <p className="mt-1 font-display text-lg font-semibold">{e.venue}</p>
                <p className="text-ink-soft">{e.address}</p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-ink hover:underline"
                >
                  {t.openInMaps}
                  <span aria-hidden>→</span>
                </a>
              </div>

              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{t.bringLabel}</p>
                <p className="mt-2 text-ink-soft">{t.bringBody}</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {t.betweenTitle}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{t.betweenBody}</p>

              <div className="mt-8 rounded-card border border-line bg-paper p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{t.whereLabel}</p>
                <p className="mt-1 font-display text-lg font-semibold">{brand.city}</p>
                <p className="text-ink-soft">{t.betweenWhen}</p>
              </div>
            </>
          )}
        </div>

        {/* ticket card */}
        <div className="rounded-card bg-night p-7 text-paper">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-glow">{t.saveYourSpot}</p>
          <p className="mt-2 text-cream-dim">
            {t.rsvpHelps}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-3 text-center">
              <Image
                src="/assets/qr-luma.png"
                alt={t.lumaQrAlt}
                width={120}
                height={120}
                className="mx-auto h-auto w-full [image-rendering:pixelated]"
              />
              <p className="mt-2 text-xs font-semibold text-ink">{t.scanToRsvp}</p>
            </div>
            <div className="rounded-2xl bg-white p-3 text-center">
              <Image
                src="/assets/qr-whatsapp.png"
                alt={t.whatsappQrAlt}
                width={120}
                height={120}
                className="mx-auto h-auto w-full [image-rendering:pixelated]"
              />
              <p className="mt-2 text-xs font-semibold text-ink">{t.joinWhatsapp}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <CTAButton href={links.luma} external variant="ember" className="w-full">
              {t.rsvpOnLuma}
            </CTAButton>
            <CTAButton href={links.whatsapp} external variant="ghost-dark" className="w-full">
              {t.whatsappCommunity}
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
