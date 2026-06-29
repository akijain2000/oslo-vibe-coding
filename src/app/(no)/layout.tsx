import type { Metadata, Viewport } from "next";
import "../globals.css";
import { brand, SITE_URL } from "@/lib/brand";
import { fontClass } from "@/lib/fonts";
import SiteBody from "@/components/SiteBody";

// Norwegian root layout. Ships <html lang="nb-NO"> server-side so the /no routes
// are correct for screen readers and crawlers without client-side correction.
// Per-page titles/descriptions/canonicals come from each page's generateMetadata.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oslo Vibe Coding: gratis vibe coding-samlinger i Oslo",
    template: "%s · Oslo Vibe Coding",
  },
  description: brand.description,
  applicationName: brand.name,
  openGraph: {
    type: "website",
    locale: "nb_NO",
    alternateLocale: ["en_US"],
    siteName: brand.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7f0" },
    { media: "(prefers-color-scheme: dark)", color: "#110f17" },
  ],
  colorScheme: "light",
};

export default function NoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb-NO" className={fontClass}>
      <SiteBody>{children}</SiteBody>
    </html>
  );
}
