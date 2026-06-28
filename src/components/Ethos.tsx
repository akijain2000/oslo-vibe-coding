import { Section, Eyebrow, SectionHeading } from "./Section";
import SparkMark from "./SparkMark";

const beliefs = [
  {
    title: "Anyone can build now.",
    body: "The tools got good. What is usually missing is not talent. It is a room, a few hours, and some company.",
  },
  {
    title: "Curiosity is the only requirement.",
    body: "Beginners sit next to people who ship for a living. Nobody checks your CV at the door.",
  },
  {
    title: "Break things in the open.",
    body: "Bring the half-finished and the half-broken. Building with AI is planning, verifying and iterating, out loud, together.",
  },
  {
    title: "No one should feel lonely while coding.",
    body: "That is the whole reason this exists. You should not sit on an idea because you do not know where to start.",
  },
];

export default function Ethos() {
  return (
    <Section id="ethos" tone="night">
      <div className="max-w-2xl">
        <Eyebrow dark>What we believe</Eyebrow>
        <SectionHeading className="mt-4 text-paper">
          The hard part was never the code. <span className="spark-text">It was doing it alone.</span>
        </SectionHeading>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-night-line bg-night-line sm:grid-cols-2">
        {beliefs.map((b) => (
          <div key={b.title} className="bg-night p-7 sm:p-8">
            <SparkMark className="h-5 w-5 text-glow" />
            <h3 className="mt-4 font-display text-xl font-semibold text-paper sm:text-2xl">{b.title}</h3>
            <p className="mt-3 leading-relaxed text-cream-dim">{b.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
