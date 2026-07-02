import { Section, Eyebrow, SectionHeading } from "./Section";
import { organisers } from "@/content/people";

const copy = {
  en: {
    eyebrow: "Who runs this",
    heading: "Two people who think this should exist.",
    intro:
      "No company behind it, no sponsor to please. Just two builders in Oslo who got tired of coding alone and started a meetup.",
    linkedin: "Connect on LinkedIn",
  },
  no: {
    eyebrow: "Hvem står bak",
    heading: "To personer som synes dette bør finnes.",
    intro:
      "Ingen bedrift bak, ingen sponsor å tekkes. Bare to som bygger i Oslo, som ble lei av å kode alene og startet en meetup.",
    linkedin: "Ta kontakt på LinkedIn",
  },
} as const;

export default function Organisers({ locale = "en" }: { locale?: "en" | "no" }) {
  const t = copy[locale];
  return (
    <Section id="about" tone="mist">
      <div className="max-w-2xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <SectionHeading className="mt-4">{t.heading}</SectionHeading>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          {t.intro}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {organisers.map((p) => (
          <article key={p.name} className="rounded-card border border-line bg-paper p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-paper">
                {p.initials}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="text-sm text-ink-faint">{p.role}</p>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-ink-soft">{p.bio}</p>
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-ink hover:underline"
            >
              {t.linkedin}
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
