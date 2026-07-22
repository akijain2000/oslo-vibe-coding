import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Prose from "@/components/Prose";
import SparkMark from "@/components/SparkMark";
import { BriefJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { visibleBriefs, getBrief, briefSeriesParts } from "@/content/brief";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export function generateStaticParams() {
  return visibleBriefs().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brief = getBrief(slug);
  if (!brief) return {};
  return {
    title: brief.title,
    description: brief.dek,
    alternates: {
      canonical: `/brief/${brief.slug}`,
      languages: { en: `/brief/${brief.slug}`, "x-default": `/brief/${brief.slug}` },
    },
    openGraph: {
      type: "article",
      title: `${brief.title} · Oslo Vibe Coding`,
      description: brief.dek,
      url: `${SITE_URL}/brief/${brief.slug}`,
      authors: [brief.author],
    },
    ...(brief.status === "draft" ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function BriefPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brief = getBrief(slug);
  if (!brief) notFound();

  const parts = brief.series ? briefSeriesParts(brief.series.name) : [];
  const idx = parts.findIndex((p) => p.slug === brief.slug);
  const prev = idx > 0 ? parts[idx - 1] : null;
  const next = idx >= 0 && idx < parts.length - 1 ? parts[idx + 1] : null;

  return (
    <>
      <BriefJsonLd brief={brief} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "AI Brief", path: "/brief" },
          { name: brief.title, path: `/brief/${brief.slug}` },
        ]}
      />
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Link
            href="/brief"
            className="font-mono text-xs uppercase tracking-wider text-cream-dim transition-colors hover:text-glow"
          >
            ← AI Brief
          </Link>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl">
            {brief.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-cream-dim">{brief.dek}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-cream-dim/70">
            <span>{brief.author}</span>
            <span aria-hidden>·</span>
            <span>{fmtDate(brief.datePublished)}</span>
            <span aria-hidden>·</span>
            <span>{brief.readingTimeMin} min read</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        {brief.status === "draft" && (
          <div className="mb-6 rounded-card border border-ember/40 bg-ember/[0.08] px-4 py-3 font-mono text-xs uppercase tracking-wider text-ember-ink">
            Draft preview · not public yet
          </div>
        )}

        {brief.heroImage && (
          <figure className="mb-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-line bg-mist">
              <Image
                src={brief.heroImage.src}
                alt={brief.heroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
            {brief.heroImage.credit && (
              <figcaption className="mt-2 text-right text-xs text-ink-faint">
                Image:{" "}
                {brief.heroImage.creditUrl ? (
                  <a
                    href={brief.heroImage.creditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {brief.heroImage.credit}
                  </a>
                ) : (
                  brief.heroImage.credit
                )}
              </figcaption>
            )}
          </figure>
        )}

        <div className="rounded-card border border-ember/25 bg-ember/[0.06] p-6 sm:p-7">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ember-ink">
            <SparkMark className="h-3.5 w-3.5" />
            The takeaway
          </div>
          <p className="mt-3 font-display text-lg font-medium leading-snug text-ink sm:text-xl">
            {brief.takeaway}
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {brief.sections.map((s, i) => (
            <Prose key={i} section={s} />
          ))}
        </div>

        {brief.series && parts.length > 1 && (
          <nav aria-label="Series navigation" className="mt-14 rounded-card border border-line bg-mist p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-wider text-ember-ink">
              {brief.series.name} · part {brief.series.part} of {brief.series.of}
            </p>
            <ol className="mt-4 space-y-2">
              {parts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/brief/${p.slug}`}
                    className={`flex items-baseline gap-3 text-sm leading-snug ${
                      p.slug === brief.slug ? "font-semibold text-ink" : "text-ink-soft hover:text-ember-ink"
                    }`}
                  >
                    <span className="font-mono text-xs text-ink-faint">{p.series!.part}</span>
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ol>
            {(prev || next) && (
              <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-4 text-sm font-semibold">
                {prev ? (
                  <Link href={`/brief/${prev.slug}`} className="text-ember-ink hover:underline">
                    ← {prev.title}
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link href={`/brief/${next.slug}`} className="text-right text-ember-ink hover:underline">
                    {next.title} →
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            )}
          </nav>
        )}

        <div className="mt-14 border-t border-line pt-8">
          <a
            href={brief.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember-ink hover:underline"
          >
            {brief.sourceLabel ?? "Read the source"}
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-12 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Curious about AI? Come build with us.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            Oslo Vibe Coding runs free, beginner-friendly drop-ins where we build real things with AI. No one codes alone.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              RSVP for the next session
            </a>
            <Link
              href="/start"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              New to this? Start here
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
