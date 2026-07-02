import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "FAQ: vibe coding meetups in Oslo",
  description:
    "Answers to the common questions about Oslo Vibe Coding: what vibe coding is, whether you need to know how to code, whether it's free, and where and when we meet.",
  alternates: {
    canonical: "/faq",
    languages: { en: "/faq", "x-default": "/faq" },
  },
  openGraph: {
    title: "FAQ · Oslo Vibe Coding",
    description: "What vibe coding is, whether you need to code, whether it's free, and where we meet.",
    url: `${SITE_URL}/faq`,
  },
};

// One source of truth: the visible Q&A and the FAQPage schema render from this.
const faqs: { q: string; a: string }[] = [
  {
    q: "What is vibe coding?",
    a: "Vibe coding means building software by describing what you want to an AI model and steering it with feedback, instead of typing every line yourself. Andrej Karpathy named it in early 2025, and Collins made it their word of the year for 2025.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. Oslo Vibe Coding is beginner-first. Many people who come have never written a line of code. You bring an idea, and the tools and the people help you build it.",
  },
  {
    q: "Is it really free?",
    a: "Yes, completely free. We are a nonprofit community. There is nothing to buy and no catch. We believe cheap, safe access to AI should not be a privilege.",
  },
  {
    q: "Where and when are the sessions?",
    a: "We meet in Oslo, roughly weekly, at spots like Spaces Stortorvet and other venues around town. The next date always goes up on Luma first, so join there or on WhatsApp to hear when it is set.",
  },
  {
    q: "What should I bring?",
    a: "A laptop, an idea if you have one, and a willingness to try. That is the whole list.",
  },
  {
    q: "Who is it for?",
    a: "Everyone. Total beginners, curious non-developers, designers, students, and experienced engineers who want to build with AI. No experience required.",
  },
  {
    q: "What tools do you use?",
    a: "Whatever gets you building. Common picks are Lovable (describe an app, get a deployed one), Cursor (an AI-first editor), and Claude Code (a terminal agent for real codebases). You only need one to start.",
  },
  {
    q: "Is it in English or Norwegian?",
    a: "Both. Sessions run in a mix, and no Norwegian is required to take part. This website is available in English and Norwegian.",
  },
  {
    q: "Can a total beginner really build something in one evening?",
    a: "Yes. Most people leave a first session with something small they actually made. The work is mostly describing what you want and steering the model, not memorizing syntax.",
  },
  {
    q: "How do I join?",
    a: "RSVP on Luma for the next session, or join the WhatsApp community to stay in the loop. Both are free.",
  },
];

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Eyebrow dark>Questions & answers</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Everything people usually want to know about Oslo Vibe Coding, our free drop-in AI coding
            meetups in Oslo. Still unsure? Just come to a session.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <dl className="divide-y divide-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-7 first:pt-0">
              <dt className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{f.q}</dt>
              <dd className="mt-3 leading-relaxed text-ink-soft">{f.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Come build with us.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            The best way to learn this is in a room with other people. Our drop-ins are free and open to
            total beginners.
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
