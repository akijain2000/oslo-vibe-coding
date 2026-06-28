"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { toPng } from "html-to-image";
import PosterCanvas, { type PosterData } from "./PosterCanvas";
import { events } from "@/content/events";

const PREVIEW_SCALE = 0.34;

const stripUrl = (u: string) => u.replace(/^https?:\/\//, "").replace(/\/$/, "");
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "poster";

type Fields = Omit<PosterData, "qrDataUrl">;

const fromEvent = (slug: string): Fields => {
  const e = events.find((ev) => ev.slug === slug) ?? events[0];
  return {
    eyebrow: "Free · Drop-in · Oslo",
    title: e.title,
    tagline: "No one codes alone. Bring a laptop and an idea.",
    dateLabel: e.dateLabel,
    timeLabel: e.timeLabel,
    venue: e.venue,
    address: e.address,
    rsvpLabel: stripUrl(e.rsvpUrl ?? "oslovibecoding.tech"),
    footer: "Free · Beginners welcome",
  };
};

const defaultRsvpUrl = events.find((e) => e.status === "upcoming")?.rsvpUrl ?? "https://oslovibecoding.tech";

const FIELD_LABELS: { key: keyof Fields; label: string; full?: boolean }[] = [
  { key: "title", label: "Event title", full: true },
  { key: "eyebrow", label: "Top label" },
  { key: "footer", label: "Footer note" },
  { key: "tagline", label: "Tagline", full: true },
  { key: "dateLabel", label: "Date" },
  { key: "timeLabel", label: "Time" },
  { key: "venue", label: "Venue" },
  { key: "address", label: "Address" },
];

export default function PosterMaker() {
  const upcomingSlug = events.find((e) => e.status === "upcoming")?.slug ?? events[0].slug;
  const [fields, setFields] = useState<Fields>(() => fromEvent(upcomingSlug));
  const [rsvpUrl, setRsvpUrl] = useState(defaultRsvpUrl);
  const [qr, setQr] = useState("");
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Regenerate the QR whenever the RSVP link changes.
  useEffect(() => {
    let alive = true;
    QRCode.toDataURL(rsvpUrl || "https://oslovibecoding.tech", {
      margin: 1,
      width: 600,
      color: { dark: "#16151c", light: "#ffffff" },
    })
      .then((url) => {
        if (alive) setQr(url);
      })
      .catch(() => {
        if (alive) setQr("");
      });
    return () => {
      alive = false;
    };
  }, [rsvpUrl]);

  const set = (key: keyof Fields, value: string) => setFields((f) => ({ ...f, [key]: value }));

  const loadPreset = (slug: string) => {
    setFields(fromEvent(slug));
    const e = events.find((ev) => ev.slug === slug);
    setRsvpUrl(e?.rsvpUrl ?? "https://oslovibecoding.tech");
  };

  const download = async () => {
    if (!ref.current) return;
    setBusy(true);
    try {
      // Render the offscreen 1080x1920 node twice; the first pass warms font embedding.
      await toPng(ref.current, { pixelRatio: 1, cacheBust: true });
      const dataUrl = await toPng(ref.current, { pixelRatio: 1, cacheBust: true });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${slugify(fields.title)}-1080x1920.png`;
      a.click();
    } finally {
      setBusy(false);
    }
  };

  const data: PosterData = { ...fields, rsvpLabel: stripUrl(rsvpUrl), qrDataUrl: qr };

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_minmax(360px,420px)] lg:gap-16">
      {/* form */}
      <div>
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">Start from an event</span>
          <select
            onChange={(e) => loadPreset(e.target.value)}
            defaultValue={upcomingSlug}
            className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink"
          >
            {events.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.title} · {e.dateLabel}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FIELD_LABELS.map((f) => (
            <label key={f.key} className={`block ${f.full ? "sm:col-span-2" : ""}`}>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">{f.label}</span>
              <input
                value={fields[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink"
              />
            </label>
          ))}
          <label className="block sm:col-span-2">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
              RSVP link (becomes the QR code)
            </span>
            <input
              value={rsvpUrl}
              onChange={(e) => setRsvpUrl(e.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={download}
          disabled={busy}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-pill bg-ember px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47] disabled:opacity-60"
        >
          {busy ? "Rendering…" : "Download poster (1080 × 1920 PNG)"}
        </button>
        <p className="mt-3 text-sm text-ink-faint">
          Instagram-story size. Drops straight into a LinkedIn or Instagram post, or prints for the room.
        </p>
      </div>

      {/* live preview */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint">Live preview</p>
        <div
          className="overflow-hidden rounded-2xl border border-line shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]"
          style={{ width: 1080 * PREVIEW_SCALE, height: 1920 * PREVIEW_SCALE }}
        >
          <div style={{ transform: `scale(${PREVIEW_SCALE})`, transformOrigin: "top left" }}>
            <PosterCanvas ref={ref} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
