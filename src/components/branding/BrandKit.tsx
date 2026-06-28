"use client";

import { useRef, useState, type ReactNode } from "react";
import { toPng } from "html-to-image";
import { BRAND_ASSETS, type AssetData, type BrandAsset } from "./assets";
import {
  palette,
  typography,
  dimensions,
  bios,
  captionTemplates,
  hashtagSets,
  playbook,
} from "@/content/brandkit";

function CopyButton({ text, label = "Copy", className = "" }: { text: string; label?: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          /* clipboard blocked */
        }
      }}
      className={`shrink-0 rounded-pill border border-line px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-colors hover:border-ink/30 ${
        done ? "bg-ink text-paper" : "text-ink-soft"
      } ${className}`}
    >
      {done ? "Copied" : label}
    </button>
  );
}

function AssetCard({ asset, data }: { asset: BrandAsset; data: AssetData }) {
  const ref = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const previewW = asset.w >= asset.h ? 340 : asset.h > asset.w ? 168 : 240;
  const scale = previewW / asset.w;

  const download = async () => {
    if (!ref.current) return;
    setBusy(true);
    try {
      await toPng(ref.current, { pixelRatio: 1, cacheBust: true }); // warm font embedding
      const url = await toPng(ref.current, { pixelRatio: 1, cacheBust: true });
      const a = document.createElement("a");
      a.href = url;
      a.download = `ovc-${asset.id}-${asset.w}x${asset.h}.png`;
      a.click();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="overflow-hidden rounded-xl border border-line bg-mist"
        style={{ width: previewW, height: asset.h * scale }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: asset.w, height: asset.h }}>
          <div ref={ref}>
            <asset.Render data={data} />
          </div>
        </div>
      </div>
      <p className="mt-3 font-display text-sm font-semibold text-ink">{asset.name}</p>
      <p className="text-xs text-ink-faint">{asset.note}</p>
      <button
        type="button"
        onClick={download}
        disabled={busy}
        className="mt-2.5 inline-flex w-fit items-center gap-1.5 rounded-pill bg-ink px-4 py-2 text-xs font-semibold text-paper transition-colors hover:bg-[#26242f] disabled:opacity-60"
      >
        {busy ? "Rendering…" : `Download PNG · ${asset.w}×${asset.h}`}
      </button>
    </div>
  );
}

function SectionTitle({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-ink">{kicker}</p>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {children && <p className="mt-2 text-ink-soft">{children}</p>}
    </div>
  );
}

const BIO_LIMITS: Record<string, number> = { instagram: 150, instagramShort: 150, linkedinTagline: 120, twitter: 160 };

export default function BrandKit() {
  const [data, setData] = useState<AssetData>({
    headline: "No one codes alone.",
    subline: "Free, drop-in AI coding sessions in Oslo. Beginners genuinely welcome.",
  });

  const linkedin = BRAND_ASSETS.filter((a) => a.group === "LinkedIn");
  const instagram = BRAND_ASSETS.filter((a) => a.group === "Instagram");

  const bioRows: { key: keyof typeof bios; label: string }[] = [
    { key: "instagram", label: "Instagram bio" },
    { key: "instagramShort", label: "Instagram bio · shorter" },
    { key: "linkedinTagline", label: "LinkedIn tagline" },
    { key: "twitter", label: "X / Twitter bio" },
  ];

  return (
    <div className="space-y-24">
      {/* FOUNDATIONS */}
      <section>
        <SectionTitle kicker="Foundations" title="The look, in one place.">
          The colors, type, and sizes everything is built from. Click a color to copy its hex.
        </SectionTitle>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {palette.map((s) => (
            <button
              key={s.hex}
              type="button"
              onClick={() => navigator.clipboard?.writeText(s.hex).catch(() => {})}
              className="group overflow-hidden rounded-card border border-line text-left transition-colors hover:border-ink/20"
            >
              <div className="h-24" style={{ background: s.hex }} />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-ink">{s.name}</span>
                  <span className="font-mono text-xs text-ink-faint group-hover:text-ember-ink">{s.hex}</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{s.role}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-card border border-line bg-mist p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Type</p>
            <ul className="mt-4 space-y-4">
              {typography.map((tspec) => (
                <li key={tspec.name}>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display text-lg font-semibold text-ink">{tspec.name}</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-ember-ink">{tspec.family}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{tspec.use}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-line bg-mist p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Sizes</p>
            <ul className="mt-4 divide-y divide-line">
              {dimensions.map((d) => (
                <li key={d.name} className="flex items-baseline justify-between gap-4 py-2.5">
                  <div>
                    <span className="text-sm font-semibold text-ink">{d.name}</span>
                    <span className="ml-2 text-xs text-ink-faint">{d.where}</span>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-ink-soft">{d.size}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ASSETS */}
      <section>
        <SectionTitle kicker="Ready to post" title="Download a banner, avatar, or post.">
          Every asset exports as a PNG at the right size. Edit the text below and it updates the post and
          story templates live.
        </SectionTitle>

        <div className="mt-8 grid gap-4 rounded-card border border-line bg-mist p-6 sm:grid-cols-2">
          <label className="block">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">Headline (posts + story)</span>
            <input
              value={data.headline}
              onChange={(e) => setData((d) => ({ ...d, headline: e.target.value }))}
              className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink"
            />
          </label>
          <label className="block">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">Subline (announcement / invite / story)</span>
            <input
              value={data.subline}
              onChange={(e) => setData((d) => ({ ...d, subline: e.target.value }))}
              className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink"
            />
          </label>
        </div>

        <h3 className="mt-12 font-display text-lg font-semibold text-ink">LinkedIn</h3>
        <div className="mt-5 flex flex-wrap gap-8">
          {linkedin.map((a) => (
            <AssetCard key={a.id} asset={a} data={data} />
          ))}
        </div>

        <h3 className="mt-12 font-display text-lg font-semibold text-ink">Instagram</h3>
        <div className="mt-5 flex flex-wrap gap-8">
          {instagram.map((a) => (
            <AssetCard key={a.id} asset={a} data={data} />
          ))}
        </div>
      </section>

      {/* BIOS */}
      <section>
        <SectionTitle kicker="Copy" title="Bios, ready to paste.">
          Written for each platform. Tap copy and drop it in.
        </SectionTitle>

        <div className="mt-8 space-y-4">
          {bioRows.map((row) => {
            const text = bios[row.key];
            const limit = BIO_LIMITS[row.key];
            return (
              <div key={row.key} className="rounded-card border border-line bg-mist p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">{row.label}</span>
                  <div className="flex items-center gap-3">
                    {limit && (
                      <span className={`font-mono text-xs ${text.length > limit ? "text-ember-ink" : "text-ink-faint"}`}>
                        {text.length}/{limit}
                      </span>
                    )}
                    <CopyButton text={text} />
                  </div>
                </div>
                <p className="mt-3 whitespace-pre-line text-ink">{text}</p>
              </div>
            );
          })}

          <div className="rounded-card border border-line bg-mist p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">LinkedIn · About</span>
              <CopyButton text={bios.linkedinAbout} />
            </div>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-ink">{bios.linkedinAbout}</p>
          </div>
        </div>
      </section>

      {/* CAPTIONS */}
      <section>
        <SectionTitle kicker="Copy" title="Caption templates.">
          Fill in the brackets. The first line is the hook, so keep it strong.
        </SectionTitle>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {captionTemplates.map((c) => (
            <div key={c.name} className="flex flex-col rounded-card border border-line bg-mist p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-sm font-semibold text-ink">{c.name}</span>
                <CopyButton text={c.text} />
              </div>
              <p className="mt-1 text-xs text-ink-faint">{c.when}</p>
              <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-ink-soft">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HASHTAGS */}
      <section>
        <SectionTitle kicker="Copy" title="Hashtag sets.">
          Instagram caps hashtags at 5 now, and keywords in the caption matter more. Use the
          recommended set, or mix about two local + two niche + the branded tag.
        </SectionTitle>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {hashtagSets.map((set) => {
            const joined = set.tags.map((tag) => `#${tag}`).join(" ");
            return (
              <div key={set.name} className="rounded-card border border-line bg-mist p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-sm font-semibold text-ink">{set.name}</span>
                  <CopyButton text={joined} label="Copy all" />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {set.tags.map((tag) => (
                    <span key={tag} className="rounded-pill border border-line bg-paper px-2.5 py-1 font-mono text-xs text-ink-soft">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PLAYBOOK */}
      <section>
        <SectionTitle kicker="What works" title="The playbook.">
          The short version of what we found, so the feed stays consistent without much effort.
        </SectionTitle>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <PlaybookCard title="Instagram" dos={playbook.instagramDo} donts={playbook.instagramDont} />
          <PlaybookCard title="LinkedIn" dos={playbook.linkedinDo} donts={playbook.linkedinDont} />
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-card border border-line bg-mist p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">A simple weekly rhythm</p>
            <ul className="mt-4 space-y-2.5">
              {playbook.cadence.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-line bg-mist p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">What to post about</p>
            <ul className="mt-4 space-y-3">
              {playbook.contentPillars.map((p) => (
                <li key={p.name}>
                  <span className="font-display text-sm font-semibold text-ink">{p.name}.</span>{" "}
                  <span className="text-sm text-ink-soft">{p.idea}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlaybookCard({ title, dos, donts }: { title: string; dos: string[]; donts: string[] }) {
  return (
    <div className="rounded-card border border-line bg-mist p-6">
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ember-ink">Do</p>
      <ul className="mt-2 space-y-2">
        {dos.map((d) => (
          <li key={d} className="text-sm leading-relaxed text-ink-soft">{d}</li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink-faint">Skip</p>
      <ul className="mt-2 space-y-2">
        {donts.map((d) => (
          <li key={d} className="text-sm leading-relaxed text-ink-soft">{d}</li>
        ))}
      </ul>
    </div>
  );
}
