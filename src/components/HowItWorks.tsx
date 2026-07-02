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
    ],
    forYouLabel: "This is for you if you are",
    forYou: [
      "Total beginners",
      "Experienced developers",
      "Designers",
      "Product people",
      "Students",
      "The AI-curious",
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
        body: "Stikk innom når som helst i løpet av kvelden. Ingen billett trengs. En påmelding hjelper oss bare å sette fram nok stoler.",
      },
      {
        n: "02",
        title: "Ta med det du har",
        body: "En laptop og en idé, et halvferdig prosjekt, eller bare nysgjerrighet. Du trenger ikke å være ekspert. Du trenger bare å møte opp.",
      },
      {
        n: "03",
        title: "Bygg, ødelegg, fiks",
        body: "Jobb med ditt eget, sett deg i par, eller bli med på noen andres. Vi sammenligner verktøy som Claude Code, Cursor og Lovable og jobber mot noe brukbart.",
      },
      {
        n: "04",
        title: "Gå hjem med noe",
        body: "Et tydeligere neste steg, et løst problem, eller en første prototype. Ofte mer enn én.",
      },
    ],
    forYouLabel: "Dette er for deg hvis du er",
    forYou: [
      "Helt fersk",
      "Erfaren utvikler",
      "Designer",
      "Produktmenneske",
      "Student",
      "AI-nysgjerrig",
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

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((s) => (
          <li key={s.n} className="rounded-card border border-line bg-mist p-6">
            <span className="font-mono text-sm font-semibold text-ember-ink">{s.n}</span>
            <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-card border border-line bg-mist p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{t.forYouLabel}</p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {t.forYou.map((tag) => (
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
