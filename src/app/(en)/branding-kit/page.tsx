import type { Metadata } from "next";
import { Eyebrow } from "@/components/Section";
import BrandKit from "@/components/branding/BrandKit";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Brand kit",
  description:
    "Logos, colors, social banners, profile photos, post templates, bios, hashtags and a posting playbook for Oslo Vibe Coding.",
  alternates: { canonical: "/branding-kit" },
  // Internal tool, like the poster maker: reachable by URL, kept out of search + nav.
  robots: { index: false, follow: false },
  openGraph: {
    title: "Brand kit · Oslo Vibe Coding",
    description: "Everything you need to post as Oslo Vibe Coding.",
    url: `${SITE_URL}/branding-kit`,
  },
};

export default function BrandingKitPage() {
  return (
    <>
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
          <Eyebrow dark>For organisers</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            The <span className="spark-text">brand kit</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Everything you need to post as Oslo Vibe Coding. Download banners, profile photos and post
            templates, copy the bios and hashtags, and follow the short playbook. No design tools, no
            waiting on anyone.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <BrandKit />
      </div>
    </>
  );
}
