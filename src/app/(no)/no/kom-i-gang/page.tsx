import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import Prose from "@/components/Prose";
import { guideNo } from "@/content/guide.no";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

const LANGS = { en: "/start", "nb-NO": "/no/kom-i-gang", "x-default": "/start" };

export const metadata: Metadata = {
  title: "Kom i gang med vibe coding",
  description: guideNo.dek,
  alternates: { canonical: "/no/kom-i-gang", languages: LANGS },
  openGraph: {
    type: "article",
    title: "Kom i gang med vibe coding · Oslo Vibe Coding",
    description: guideNo.dek,
    url: `${SITE_URL}/no/kom-i-gang`,
    locale: "nb_NO",
    alternateLocale: ["en_US"],
  },
};

export default function KomIGangPage() {
  return (
    <div lang="nb-NO">
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <Eyebrow dark>Kom i gang · {guideNo.readingTimeMin} min lesing</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Fra aldri å ha kodet til <span className="spark-text">din første app</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">{guideNo.dek}</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">På denne siden</p>
            <nav aria-label="På denne siden" className="mt-4 flex flex-col gap-2.5">
              {guideNo.sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm leading-snug text-ink-soft transition-colors hover:text-ember-ink"
                >
                  <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>{" "}
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 space-y-14">
            {guideNo.sections.map((s) => (
              <Prose key={s.id} section={s} />
            ))}

            <div className="rounded-card bg-night p-8 text-center text-paper sm:p-10">
              <h2 className="font-display text-2xl font-bold tracking-tight">Nå gjør du det med folk.</h2>
              <p className="mx-auto mt-3 max-w-md text-cream-dim">
                Når du har prøvd loopen, er den raskeste veien videre et rom fullt av andre som gjør det samme.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={links.luma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
                >
                  Meld deg på neste samling
                </a>
                <Link
                  href="/no/resources"
                  className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
                >
                  Se hele biblioteket
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
