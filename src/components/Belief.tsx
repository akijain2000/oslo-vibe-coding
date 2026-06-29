import { Section, Eyebrow, SectionHeading } from "./Section";

// One dark "why this exists" moment. Merges the old Ethos beliefs and the
// Mission pillars so the page makes the argument once, not twice.
const pillars = [
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
];

export default function Belief() {
  return (
    <Section id="why" tone="night">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow dark>Why it&apos;s free</Eyebrow>
          <SectionHeading className="mt-4 text-paper">
            Coding is easier <span className="spark-text">when you are not doing it alone.</span>
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-cream-dim">
            The tools got good. Many more people can build now, and curiosity is the only thing you need at the
            door. What is usually missing is a room, a few hours, and some company.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cream-dim">
            Cheap, safe access to AI should not be a privilege. We run this as a nonprofit, in the
            open, because the most powerful tools in a generation are landing right now, and whether
            they reach everyone is partly a question of who gets shown the door in. So we keep the
            door open.
          </p>
        </div>

        <div className="grid content-start gap-4">
          {pillars.map((p) => (
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
