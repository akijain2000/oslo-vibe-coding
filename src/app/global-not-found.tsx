import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { fontClass } from "@/lib/fonts";

// Global 404 for unmatched URLs. With multiple root layouts there is no shared
// layout to compose a not-found page from, so this renders its own html/body
// and imports global styles + fonts directly.
export const metadata: Metadata = {
  title: "Page not found · Oslo Vibe Coding",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontClass}>
      <body className="flex min-h-full flex-col items-center justify-center bg-night px-6 text-center text-paper">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-glow">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">This page wandered off.</h1>
        <p className="mt-4 max-w-md leading-relaxed text-cream-dim">
          The link is broken or the page moved. Head back and find your way from there.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
        >
          Back to the home page
        </Link>
      </body>
    </html>
  );
}
