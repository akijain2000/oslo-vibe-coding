import { Section, Eyebrow, SectionHeading } from "./Section";
import { organisers } from "@/content/people";

export default function Organisers() {
  return (
    <Section id="about" tone="mist">
      <div className="max-w-2xl">
        <Eyebrow>Who runs this</Eyebrow>
        <SectionHeading className="mt-4">Two people who think this should exist.</SectionHeading>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          No company behind it, no sponsor to please. Just two builders in Oslo who got tired of
          coding alone and decided to fix it.
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
              Connect on LinkedIn
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
