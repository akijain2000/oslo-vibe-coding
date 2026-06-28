import Link from "next/link";

type Variant = "ember" | "ink" | "outline" | "ghost-dark";

const styles: Record<Variant, string> = {
  ember: "bg-ember text-white hover:bg-[#ff6f47] shadow-[0_8px_24px_-8px_rgba(255,90,44,0.7)]",
  ink: "bg-ink text-paper hover:bg-[#26242f]",
  outline: "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  "ghost-dark": "border border-night-line text-paper hover:bg-white/5",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "ember",
  external,
  className = "",
  ...rest
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-pill px-5 py-3 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
