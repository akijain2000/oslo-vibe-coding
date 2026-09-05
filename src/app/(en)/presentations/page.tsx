import type { Metadata } from "next";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/components/JsonLd";
import { Eyebrow } from "@/components/Section";
import { SITE_URL } from "@/lib/brand";

const DESCRIPTION =
  "Open and share the presentations from Oslo Vibe Coding sessions, covering practical ways to build better software with AI.";

const presentations = [
  {
    title: "Context Engineering: What the Model Sees Next",
    session: "Session 06",
    slides: "12 slides",
    href: "/presentations/context-engineering.html",
    description:
      "How to give an AI model the right instructions, evidence, tools, and state for its next decision.",
    featured: true,
  },
  {
    title: "Spec-Driven Development in the AI Age",
    session: "Session 05",
    slides: "15 slides",
    href: "/presentations/spec-driven-development.html",
    description:
      "How a clear specification becomes the shared contract when AI makes implementation abundant.",
    featured: false,
  },
  {
    title: "Loop Engineering: From Prompts to /goal",
    session: "Session 04",
    slides: "21 slides",
    href: "/presentations/loop-engineering.html",
    description:
      "How goals, checks and guardrails help an AI agent move from producing an answer to finishing a job.",
    featured: false,
  },
];

export const metadata: Metadata = {
  title: "Session presentations",
  description: DESCRIPTION,
  alternates: { canonical: "/presentations", languages: { en: "/presentations", "x-default": "/presentations" } },
  openGraph: {
    title: "Session presentations · Oslo Vibe Coding",
    description: DESCRIPTION,
    url: `${SITE_URL}/presentations`,
  },
};

export default function PresentationsPage() {
  return (
    <>
      <CollectionPageJsonLd
        name="Session presentations"
        description={DESCRIPTION}
        path="/presentations"
        items={presentations.map((presentation) => ({
          name: presentation.title,
          path: presentation.href,
        }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Presentations", path: "/presentations" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Eyebrow dark>From the room, into the open</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Presentations from our sessions.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">{DESCRIPTION}</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-5">
          {presentations.map((presentation) => (
            <article
              key={presentation.href}
              className={`rounded-card border p-6 sm:p-8 ${
                presentation.featured ? "border-ember/30 bg-ember/[0.06]" : "border-line bg-mist"
              }`}
            >
              <p
                className={`font-mono text-xs uppercase tracking-wider ${
                  presentation.featured ? "text-ember-ink" : "text-ink-faint"
                }`}
              >
                {presentation.session} · {presentation.slides}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">{presentation.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{presentation.description}</p>
              <a
                href={presentation.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember-ink hover:underline"
              >
                Open presentation <span aria-hidden>↗</span>
              </a>
            </article>
          ))}
        </div>

        <aside className="mt-12 border-l-2 border-ember pl-5">
          <p className="font-display text-lg font-semibold">Made to be shared.</p>
          <p className="mt-1 leading-relaxed text-ink-soft">
            These decks are the same material used in the room. Open one in your browser, share the link, or revisit it at your own pace.
          </p>
        </aside>
      </main>
    </>
  );
}
