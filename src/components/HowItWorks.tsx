import { Section, Eyebrow, SectionHeading, Lede } from "./Section";

const steps = [
  {
    n: "01",
    title: "Show up",
    body: "Drop in any time during the session. No ticket needed. An RSVP just helps us set out enough chairs.",
  },
  {
    n: "02",
    title: "Bring what you've got",
    body: "A laptop and an idea, a half-broken project, or pure curiosity. You do not need to be an expert. You just need to show up.",
  },
  {
    n: "03",
    title: "Build, break, fix",
    body: "Work on your own thing, pair up, or join someone else's. We compare tools like Claude Code, Cursor and Lovable and work toward something usable.",
  },
  {
    n: "04",
    title: "Leave with something",
    body: "A clearer next step, a problem fixed, or a first prototype. Often more than one.",
  },
];

const forYou = [
  "Total beginners",
  "Experienced developers",
  "Designers",
  "Product people",
  "Students",
  "The AI-curious",
];

export default function HowItWorks() {
  return (
    <Section id="how" tone="paper">
      <div className="max-w-2xl">
        <Eyebrow>How it works</Eyebrow>
        <SectionHeading className="mt-4">
          A room, some laptops, and zero gatekeeping.
        </SectionHeading>
        <div className="mt-5">
          <Lede>
            No pressure. No “you need 5 years of React experience to sit here” energy. Just people
            building things with AI and helping each other along the way.
          </Lede>
        </div>
      </div>

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="rounded-card border border-line bg-mist p-6">
            <span className="font-mono text-sm font-semibold text-ember-ink">{s.n}</span>
            <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-card border border-line bg-mist p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">This is for you if you are</p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {forYou.map((tag) => (
            <li
              key={tag}
              className="rounded-pill border border-line bg-paper px-3.5 py-1.5 text-sm font-medium text-ink"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
