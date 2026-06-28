import SparkMark from "./SparkMark";

type Tone = "paper" | "mist" | "night";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  night: "bg-night text-paper",
};

export function Section({
  id,
  tone = "paper",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${toneClass[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] ${
        dark ? "text-glow" : "text-ember-ink"
      }`}
    >
      <SparkMark className="h-3.5 w-3.5" />
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.75rem] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-lg leading-relaxed ${dark ? "text-cream-dim" : "text-ink-soft"}`}>
      {children}
    </p>
  );
}
