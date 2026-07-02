import type { Metadata } from "next";
import Link from "next/link";
import Prose from "@/components/Prose";
import SparkMark from "@/components/SparkMark";
import { FrontierDiagram } from "@/components/frontier/FrontierDiagrams";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { ProseBlock } from "@/content/articles";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

const DEFINITION =
  "Vibe coding means building software by describing what you want to an AI model in plain language and steering it with feedback, instead of writing every line of code yourself.";

export const metadata: Metadata = {
  title: "What is vibe coding? A plain-English explainer",
  description: DEFINITION,
  alternates: {
    canonical: "/what-is-vibe-coding",
    languages: { en: "/what-is-vibe-coding", "x-default": "/what-is-vibe-coding" },
  },
  openGraph: {
    type: "article",
    title: "What is vibe coding? A plain-English explainer",
    description: DEFINITION,
    url: `${SITE_URL}/what-is-vibe-coding`,
  },
};

const sections: ProseBlock[] = [
  {
    heading: "How it actually works",
    paragraphs: [
      "You describe what you want, the model writes the code and runs it, you look at the result, and you tell it what is wrong. Then you go around again. That loop, not the typing, is the whole activity.",
      "Andrej Karpathy named it in early 2025. The idea caught on fast enough that Collins made “vibe coding” its word of the year for 2025. So if it feels new, that is because it is.",
    ],
    pullquote: "You say what you want, the model writes it, you run it, you say what is wrong, and you go around again.",
    links: [{ label: "Karpathy's original note", url: "https://x.com/karpathy/status/1886192184808149383" }],
  },
  {
    heading: "What it's great for — and where it breaks",
    paragraphs: [
      "Vibe coding is genuinely great for playing, learning, and small personal tools. You can build a working thing in an evening without knowing a programming language first.",
      "But not all AI-assisted programming is vibe coding. Simon Willison drew a useful line: true vibe coding means you lean on the model and accept the result without reading every line. That is fine for prototypes. For anything you will maintain or put in front of real users — and especially anything touching passwords, payments, or other people's data — you still need to read and understand the code the model wrote.",
    ],
    links: [
      { label: "Simon Willison: not all AI-assisted programming is vibe coding", url: "https://simonwillison.net/2025/Mar/19/vibe-coding/" },
    ],
  },
  {
    heading: "Why it's possible now",
    paragraphs: [
      "A few years ago, building software meant learning syntax, setup, and a long list of small frustrations before you could make anything. That wall is mostly gone, because intelligence got cheap.",
      "By one common comparison, the cost of GPT-3.5-level capability fell from about $20 per million tokens to about $0.07 in roughly eighteen months. Cheap models are patient enough to walk a beginner through a build at almost no cost. The barrier to building has never been lower.",
    ],
  },
  {
    heading: "How to try it tonight",
    paragraphs: [
      "Pick one tool and one tiny, real idea. A personal tool, a one-page site, a small calculator. Describe it in plain words, run it, say what is wrong, and repeat until it works. Small and real beats clever and abstract.",
      "Our getting-started guide walks through the whole thing from zero, including which tool to pick and how to not get burned. And the fastest way to learn is in a room with other people: come to a free Oslo Vibe Coding drop-in and build the next thing with people around you.",
    ],
    links: [
      { label: "Getting started with vibe coding", url: "/start" },
      { label: "The tools and free courses we point people to", url: "/resources" },
    ],
  },
];

export default function WhatIsVibeCodingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "What is vibe coding? A plain-English explainer",
                description: DEFINITION,
                author: { "@id": `${SITE_URL}/#org` },
                publisher: { "@id": `${SITE_URL}/#org` },
                datePublished: "2026-07-03",
                inLanguage: "en",
                about: "Vibe coding",
                mainEntityOfPage: `${SITE_URL}/what-is-vibe-coding`,
                image: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 },
                url: `${SITE_URL}/what-is-vibe-coding`,
              },
              {
                "@type": "DefinedTerm",
                "@id": `${SITE_URL}/what-is-vibe-coding#term`,
                name: "Vibe coding",
                description: DEFINITION,
                inDefinedTermSet: `${SITE_URL}/what-is-vibe-coding`,
              },
            ],
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "What is vibe coding?", path: "/what-is-vibe-coding" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <p className="font-mono text-xs uppercase tracking-wider text-glow">Explainer</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            What is vibe coding?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-cream-dim">
            A plain-English explainer, for people who keep hearing the phrase and want the honest version.
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-card border border-ember/25 bg-ember/[0.06] p-6 sm:p-7">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ember-ink">
            <SparkMark className="h-3.5 w-3.5" />
            The short answer
          </div>
          <p className="mt-3 font-display text-lg font-medium leading-snug text-ink sm:text-xl">{DEFINITION}</p>
        </div>

        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-card border border-line bg-night">
          <FrontierDiagram
            spec={{
              archetype: "loop",
              title: "The vibe coding loop",
              steps: ["Describe what you want", "Model writes the code", "Run it and look", "Say what's wrong"],
            }}
          />
        </div>

        <div className="mt-14 space-y-14">
          {sections.map((s, i) => (
            <Prose key={i} section={s} />
          ))}
        </div>

        <div className="mt-12 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Now go build a tiny thing.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            Reading is good. Building with people is better. Our Oslo drop-ins are free and open to total
            beginners.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/start"
              className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              Start here
            </Link>
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              RSVP for the next session
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
