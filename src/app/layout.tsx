import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { brand, SITE_URL } from "@/lib/brand";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SiteJsonLd } from "@/components/JsonLd";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["nb_NO"],
    url: SITE_URL,
    siteName: brand.name,
    title: "Oslo Vibe Coding: no one codes alone",
    description: brand.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Oslo Vibe Coding: no one codes alone",
    description: brand.description,
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <SiteJsonLd />
      </body>
    </html>
  );
}
