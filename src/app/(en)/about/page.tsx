import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { organisers } from "@/content/people";
import { links } from "@/content/links";
import { brand, SITE_URL } from "@/lib/brand";

const DESCRIPTION =
  "Oslo Vibe Coding is a free, nonprofit community for building software with AI. Who we are, why we run it in the open, and how to join.";

export const metadata: Metadata = {
  title: "About Oslo Vibe Coding",
  description: DESCRIPTION,
  alternates: { canonical: "/about", languages: { en: "/about", "x-default": "/about" } },
  openGraph: {
    title: "About · Oslo Vibe Coding",
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Oslo Vibe Coding",
            description: DESCRIPTION,
            url: `${SITE_URL}/about`,
            inLanguage: "en",
            about: { "@id": `${SITE_URL}/#org` },
            mainEntity: { "@id": `${SITE_URL}/#org` },
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Eyebrow dark>About us</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            A free room to build with AI, in Oslo.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Oslo Vibe Coding is a free, drop-in community for building software with AI. No gatekeeping,
            beginners genuinely welcome. Founded in {brand.founded} in Oslo, run as a nonprofit.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <section className="prose-none">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Why we do this</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            The tools got good. Many more people can build now, and curiosity is the only thing you need at
            the door. What is usually missing is a room, a few hours, and some company.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Cheap, safe access to AI should not be a privilege. We run this as a nonprofit, in the open,
            because the most powerful tools in a generation are landing right now, and whether they reach
            everyone is partly a question of who gets shown the door in. So we keep the door open.
          </p>
        </section>

        <section className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Free, always", body: "No ticket, no fee, no upsell. The only currency at the door is curiosity." },
            { title: "Open in public", body: "We share the decks, the recaps, and the resources. Take them, use them, pass them on." },
            { title: "For everyone", body: "Students, switchers, the self-taught. A free evening is a small way to close the gap." },
          ].map((p) => (
            <div key={p.title} className="rounded-card border border-line bg-mist p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Who runs it</h2>
          <div className="mt-6 space-y-5">
            {organisers.map((p) => (
              <div key={p.name} className="flex gap-5 rounded-card border border-line bg-mist p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-night font-display text-lg font-bold text-glow">
                  {p.initials}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{p.role}</p>
                  <p className="mt-2 leading-relaxed text-ink-soft">{p.bio}</p>
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-ember-ink hover:underline"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Come build with us.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            No experience required. No one codes alone.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              RSVP for the next session
            </a>
            <Link
              href="/start"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              New to this? Start here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
