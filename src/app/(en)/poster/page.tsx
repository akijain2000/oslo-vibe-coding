import type { Metadata } from "next";
import { Eyebrow } from "@/components/Section";
import PosterMaker from "@/components/poster/PosterMaker";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Poster maker",
  description:
    "Make an on-brand Oslo Vibe Coding event poster in seconds. Fill in the details, get a print-ready 1080×1920 PNG with a QR code.",
  alternates: { canonical: "/poster" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Poster maker · Oslo Vibe Coding",
    description: "Make an on-brand event poster in seconds.",
    url: `${SITE_URL}/poster`,
  },
};

export default function PosterPage() {
  return (
    <>
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
          <Eyebrow dark>For organisers</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Make a poster in <span className="spark-text">seconds</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Pick an event or type your own details. The QR code generates itself from the RSVP link.
            Download a print-ready story poster, no design tools, no waiting on anyone.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <PosterMaker />
      </div>
    </>
  );
}
