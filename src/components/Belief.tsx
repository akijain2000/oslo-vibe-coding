import { Section, Eyebrow, SectionHeading } from "./Section";

// One dark "why this exists" moment. Merges the old Ethos beliefs and the
// Mission pillars so the page makes the argument once, not twice.
const copy = {
  en: {
    eyebrow: "Why it's free",
    headingLead: "Coding is easier ",
    headingSpark: "when you are not doing it alone.",
    paragraph1:
      "The tools got good. Many more people can build now, and curiosity is the only thing you need at the door. What is usually missing is a room, a few hours, and some company.",
    paragraph2:
      "Cheap, safe access to AI should not be a privilege. We run this as a nonprofit, in the open, because the most powerful tools in a generation are landing right now, and whether they reach everyone is partly a question of who gets shown the door in. So we keep the door open.",
    pillars: [
      {
        title: "Free, always",
        body: "No ticket, no fee, no upsell. The only currency at the door is curiosity.",
      },
      {
        title: "Open in public",
        body: "We share the decks, the recaps, and the resources. Take them, use them, pass them on.",
      },
      {
        title: "For everyone",
        body: "Students, switchers, the self-taught. The gap between people who can build with AI and people who can't is widening. A free Thursday is a small way to close it.",
      },
    ],
  },
  no: {
    eyebrow: "Hvorfor det er gratis",
    headingLead: "Koding er lettere ",
    headingSpark: "når du ikke gjør det alene.",
    paragraph1:
      "Verktøyene ble gode. Mange flere kan bygge nå, og nysgjerrighet er det eneste du trenger for å komme inn. Det som vanligvis mangler er et rom, noen timer og litt selskap.",
    paragraph2:
      "Rimelig og trygg tilgang til AI bør ikke være et privilegium. Vi driver dette som en ideell organisasjon, helt åpent, fordi de mektigste verktøyene på en generasjon lander akkurat nå, og om de når alle henger delvis sammen med hvem som blir vist veien inn. Så vi holder døren åpen.",
    pillars: [
      {
        title: "Gratis, alltid",
        body: "Ingen billett, ingen avgift, ingen mersalg. Den eneste valutaen i døra er nysgjerrighet.",
      },
      {
        title: "Åpent for alle å se",
        body: "Vi deler slidene, oppsummeringene og ressursene. Ta dem, bruk dem, send dem videre.",
      },
      {
        title: "For alle",
        body: "Studenter, de som bytter felt, de selvlærte. Gapet mellom dem som kan bygge med AI og dem som ikke kan blir større. En gratis torsdag er en liten måte å lukke det på.",
      },
    ],
  },
} as const;

export default function Belief({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];
  return (
    <Section id="why" tone="night">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow dark>{t.eyebrow}</Eyebrow>
          <SectionHeading className="mt-4 text-paper">
            {t.headingLead}<span className="spark-text">{t.headingSpark}</span>
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-cream-dim">
            {t.paragraph1}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cream-dim">
            {t.paragraph2}
          </p>
        </div>

        <div className="grid content-start gap-4">
          {t.pillars.map((p) => (
            <div key={p.title} className="rounded-card border border-night-line bg-night-2 p-6">
              <h3 className="font-display text-xl font-semibold text-paper">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-cream-dim">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
