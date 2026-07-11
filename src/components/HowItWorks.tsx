import { Section, Eyebrow, SectionHeading, Lede } from "./Section";

const copy = {
  en: {
    eyebrow: "How it works",
    heading: "A room, some laptops, and zero gatekeeping.",
    lede: "No pressure. No “you need 5 years of React experience to sit here” energy. Just people building things with AI and helping each other along the way.",
    steps: [
      {
        n: "01",
        title: "Show up",
        body: "Bring a laptop, an idea or half-broken project, or simply your curiosity. No experience required.",
      },
      {
        n: "02",
        title: "Build with the room",
        body: "Work on your own thing, pair up, ask questions, or join someone else's project. People help each other get unstuck.",
      },
      {
        n: "03",
        title: "Leave with something",
        body: "A clearer next step, a problem fixed, or a first prototype. Often more than one.",
      },
    ],
  },
  no: {
    eyebrow: "Slik fungerer det",
    heading: "Et rom, noen laptoper, og null portvakter.",
    lede: "Ingen press. Ingen «du trenger 5 års React-erfaring for å sitte her»-stemning. Bare folk som bygger ting med AI og hjelper hverandre på veien.",
    steps: [
      {
        n: "01",
        title: "Bare møt opp",
        body: "Ta med en laptop, en idé eller et halvferdig prosjekt, eller bare nysgjerrigheten din. Ingen erfaring kreves.",
      },
      {
        n: "02",
        title: "Bygg sammen med rommet",
        body: "Jobb med ditt eget, sett deg i par, still spørsmål eller bli med på noen andres prosjekt. Folk hjelper hverandre videre.",
      },
      {
        n: "03",
        title: "Gå hjem med noe",
        body: "Et tydeligere neste steg, et løst problem, eller en første prototype. Ofte mer enn én.",
      },
    ],
  },
} as const;

export default function HowItWorks({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];
  return (
    <Section id="how" tone="paper">
      <div className="max-w-2xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <SectionHeading className="mt-4">
          {t.heading}
        </SectionHeading>
        <div className="mt-5">
          <Lede>
            {t.lede}
          </Lede>
        </div>
      </div>

      <ol className="mt-14 grid gap-5 md:grid-cols-3">
        {t.steps.map((s) => (
          <li key={s.n} className="rounded-card border border-line bg-mist p-6">
            <span className="font-mono text-sm font-semibold text-ember-ink">{s.n}</span>
            <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
