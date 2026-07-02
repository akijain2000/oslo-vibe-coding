import type { Metadata, Viewport } from "next";
import "../globals.css";
import { brand, SITE_URL } from "@/lib/brand";
import { fontClass } from "@/lib/fonts";
import SiteBody from "@/components/SiteBody";

// English root layout. Ships <html lang="en">. The Norwegian routes live under
// the (no) group with their own root layout (lang="nb-NO").
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oslo Vibe Coding: free, drop-in AI coding sessions in Oslo",
    template: "%s · Oslo Vibe Coding",
  },
  description: brand.description,
  keywords: [...brand.keywords],
  applicationName: brand.name,
  authors: [{ name: "Akshat Jain" }, { name: "Harsh Trivedi" }],
  creator: "Oslo Vibe Coding",
  publisher: "Oslo Vibe Coding",
  category: "technology",
  // No layout-level canonical: each page owns its own canonical + hreflang
  // languages. A default `canonical: "/"` here would silently make any page that
  // forgets its own canonical self-canonicalize to the homepage.
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["nb_NO"],
    url: SITE_URL,
    siteName: brand.name,
    title: "Oslo Vibe Coding: no one codes alone",
    description: brand.description,
  },
  // No static title/description here, so each page's openGraph values flow into the
  // Twitter card via Next's fallback (otherwise every subpage shows the homepage card).
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

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontClass}>
      <SiteBody>{children}</SiteBody>
    </html>
  );
}
