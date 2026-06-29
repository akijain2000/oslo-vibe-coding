"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { brand } from "@/lib/brand";
import { links } from "@/content/links";

type Item = { label: string; href: string; external: boolean };
type Col = { title: string; items: Item[] };

const COMMUNITY = (no: boolean): Item[] => [
  { label: no ? "RSVP på Luma" : "RSVP on Luma", href: links.luma, external: true },
  { label: no ? "WhatsApp-gruppe" : "WhatsApp group", href: links.whatsapp, external: true },
  { label: "LinkedIn", href: links.linkedinCompany, external: true },
  { label: "GitHub", href: links.github, external: true },
];

const COLS_EN: Col[] = [
  { title: "Community", items: COMMUNITY(false) },
  {
    title: "On this site",
    items: [
      { label: "Next session", href: "/#next", external: false },
      { label: "Start here", href: "/start", external: false },
      { label: "Articles", href: "/articles", external: false },
      { label: "Resources", href: "/resources", external: false },
    ],
  },
];

const COLS_NO: Col[] = [
  { title: "Fellesskap", items: COMMUNITY(true) },
  { title: "På denne siden", items: [{ label: "Ressurser", href: "/no/resources", external: false }] },
];

export default function Footer() {
  const pathname = usePathname();
  const isNo = pathname.startsWith("/no");
  const cols = isNo ? COLS_NO : COLS_EN;
  const tagline = isNo
    ? "Ingen koder alene. Gratis, åpent, og drevet av ren glede i Oslo."
    : `${brand.tagline} Free, open, and run for the love of it in ${brand.city}.`;
  const closing = isNo
    ? `© ${brand.founded} ${brand.name}. Et ideelt fellesskap. KI for alle.`
    : `© ${brand.founded} ${brand.name}. A nonprofit community. AI for everyone.`;
  const built = isNo ? "Bygget i det åpne i Oslo." : "Built in the open in Oslo.";

  return (
    <footer className="bg-night text-cream-dim">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="dark" gradientId="logo-spark-footer" href={isNo ? "/no/resources" : "/"} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-dim/80">{tagline}</p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-paper">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.items.map((item) =>
                  item.external ? (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream-dim/80 transition-colors hover:text-glow"
                      >
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link href={item.href} className="text-cream-dim/80 transition-colors hover:text-glow">
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-night-line pt-6 text-xs text-cream-dim/75 sm:flex-row sm:items-center sm:justify-between">
          <p>{closing}</p>
          <p>{built}</p>
        </div>
      </div>
    </footer>
  );
}
