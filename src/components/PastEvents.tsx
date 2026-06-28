import { Section, Eyebrow, SectionHeading } from "./Section";
import { pastEvents } from "@/content/events";

export default function PastEvents() {
  return (
    <Section id="sessions" tone="mist">
      <div className="max-w-2xl">
        <Eyebrow>Where we&apos;ve been</Eyebrow>
        <SectionHeading className="mt-4">A few sessions in, and growing.</SectionHeading>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          It started in a public library with two people comparing tools. We are trying to make the
          drop-ins a weekly thing.
        </p>
      </div>

      <ol className="mt-12 border-l border-line">
        {pastEvents.map((e) => (
          <li key={e.slug} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-ember ring-4 ring-paper"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-semibold">{e.title}</h3>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                {e.dateLabel}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-ink-soft">
              {e.venue}
              {e.venue !== e.city ? ` · ${e.city}` : ""}
            </p>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">{e.recap ?? e.blurb}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
