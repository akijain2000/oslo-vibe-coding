import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { SiteJsonLd } from "./JsonLd";

// The shared <body> shell: skip link, nav, main, footer, structured data.
// Used by both locale root layouts so /(en) and /(no) render identical chrome.
export default function SiteBody({
  children,
  locale = "en",
}: {
  children: ReactNode;
  locale?: "en" | "no";
}) {
  return (
    <body className="min-h-full flex flex-col bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {locale === "no" ? "Hopp til innhold" : "Skip to content"}
      </a>
      <Nav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <SiteJsonLd />
    </body>
  );
}
