import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { organisers } from "@/content/people";
import { links } from "@/content/links";
import { brand, SITE_URL } from "@/lib/brand";

const DESCRIPTION =
  "The people, purpose, and community behind Oslo Vibe Coding: free AI-building sessions, open resources, and no gatekeeping.";

export const metadata: Metadata = {
  title: "Community",
  description: DESCRIPTION,
  alternates: { canonical: "/community", languages: { en: "/community", "x-default": "/community" } },
  openGraph: {
    title: "Community · Oslo Vibe Coding",
    description: DESCRIPTION,
    url: `${SITE_URL}/community`,
  },
};

export default function CommunityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Oslo Vibe Coding community",
            description: DESCRIPTION,
            url: `${SITE_URL}/community`,
            inLanguage: "en",
            about: { "@id": `${SITE_URL}/#org` },
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Community", path: "/community" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <Eyebrow dark>Community</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            A free room to build with AI, <span className="spark-text">together.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Oslo Vibe Coding is a free, drop-in community founded in {brand.founded}. Beginners are genuinely
            welcome, the resources stay open, and the room belongs to the people who show up.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <section className="grid gap-8 border-b border-line pb-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">Why this exists</h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              The tools got good. Many more people can build now, and curiosity is the only thing you need at
              the door. What is usually missing is a room, a few hours, and some company.
            </p>
            <p>
              Cheap, safe access to AI should not be a privilege. We run this as a nonprofit, in the open,
              because whether these tools reach everyone is partly a question of who gets shown the door in.
            </p>
          </div>
        </section>

        <section id="organizers" className="py-16 scroll-mt-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-ink">The people behind the room</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">Organizers</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {organisers.map((person) => (
              <article key={person.name} className="rounded-card border border-line bg-mist p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-night font-display text-lg font-bold text-glow">
                    {person.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{person.name}</h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{person.role}</p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-ink-soft">{person.bio}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ember-ink hover:underline"
                >
                  Connect on LinkedIn<span aria-hidden>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line pt-16">
          <h2 className="font-display text-3xl font-bold tracking-tight">Stay close to the community</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="group border-t border-line pt-5">
              <h3 className="font-display text-xl font-bold group-hover:text-ember-ink">WhatsApp</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Questions, projects, and the next date between sessions.</p>
            </a>
            <a href={links.linkedinCompany} target="_blank" rel="noopener noreferrer" className="group border-t border-line pt-5">
              <h3 className="font-display text-xl font-bold group-hover:text-ember-ink">LinkedIn</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Follow the recaps and see what the room is building.</p>
            </a>
            <Link href="/resources#oslo-scene" className="group border-t border-line pt-5">
              <h3 className="font-display text-xl font-bold group-hover:text-ember-ink">The Oslo scene</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Other open communities and places to learn around the city.</p>
            </Link>
          </div>
        </section>

        <div className="mt-16 rounded-card bg-night p-8 text-center text-paper sm:p-12">
          <h2 className="font-display text-3xl font-bold tracking-tight">Come build with us.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">Free, open, and beginner-friendly. No one codes alone.</p>
          <a
            href={links.luma}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
          >
            RSVP / get the next date
          </a>
        </div>
      </main>
    </>
  );
}
