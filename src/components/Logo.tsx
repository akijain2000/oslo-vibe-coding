import Link from "next/link";
import SparkMark from "./SparkMark";
import { brand } from "@/lib/brand";

// The lockup: spark + wordmark. `tone="dark"` flips it for dark sections.
// `mark` renders the glyph alone (favicon, tight spaces).

type Props = {
  tone?: "light" | "dark";
  mark?: boolean;
  className?: string;
  href?: string | null;
  /* Unique per usage so the SVG gradient id does not collide (Nav + Footer both render Logo) */
  gradientId?: string;
};

export default function Logo({
  tone = "light",
  mark = false,
  className = "",
  href = "/",
  gradientId = "logo-spark",
}: Props) {
  const word = tone === "dark" ? "text-paper" : "text-ink";

  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SparkMark
        className="h-6 w-6 shrink-0 flicker"
        gradientId={gradientId}
        title={mark ? brand.name : undefined}
      />
      {!mark && (
        <span
          className={`font-display text-[1.05rem] font-bold leading-none tracking-tight ${word}`}
        >
          Oslo <span className="spark-text">Vibe</span> Coding
        </span>
      )}
    </span>
  );

  if (href === null) return inner;

  return (
    <Link href={href} aria-label={`${brand.name} home`} className="inline-flex">
      {inner}
    </Link>
  );
}
