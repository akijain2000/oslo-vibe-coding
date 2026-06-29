import type { CSSProperties, ReactNode } from "react";

// Exportable social brand assets. Each Render is a fixed, true-size DOM node so
// html-to-image (see BrandKit) can rasterize it crisp. Colors are inline hex
// (the design tokens) and fonts use the next/font CSS vars, so exports match the
// site exactly. Editable assets read data.headline / data.subline.

const C = {
  paper: "#fbf7f0",
  mist: "#f3ede1",
  line: "#e7ddcd",
  ink: "#16151c",
  inkSoft: "#4b4956",
  night: "#110f17",
  night2: "#1b1822",
  nightLine: "#2e2a39",
  creamDim: "#d9d2c6",
  ember: "#ff5a2c",
  amber: "#ffb020",
  glow: "#ff7a4d",
  emberInk: "#b8300c",
  white: "#ffffff",
};
const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const MONO = "var(--font-geist-mono), ui-monospace, monospace";

export type AssetData = { headline: string; subline: string };

export type BrandAsset = {
  id: string;
  name: string;
  group: "LinkedIn" | "Instagram";
  w: number;
  h: number;
  editable: boolean;
  note: string;
  Render: (props: { data: AssetData }) => ReactNode;
};

function Spark({ size, id, solid }: { size: number; id: string; solid?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={solid ?? `url(#${id})`} style={{ display: "block" }}>
      {!solid && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={C.ember} />
            <stop offset="1" stopColor={C.amber} />
          </linearGradient>
        </defs>
      )}
      <path d="M12 1.5c.9 5.4 4.2 8.7 9.6 9.6v1.8c-5.4.9-8.7 4.2-9.6 9.6h-1.8c-.9-5.4-4.2-8.7-9.6-9.6v-1.8c5.4-.9 8.7-4.2 9.6-9.6h1.8Z" />
    </svg>
  );
}

function Glow({ style }: { style: CSSProperties }) {
  return <div style={{ position: "absolute", borderRadius: 9999, filter: "blur(90px)", pointerEvents: "none", ...style }} />;
}

function Wordmark({ size, color, accent }: { size: number; color: string; accent: string }) {
  return (
    <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: size, letterSpacing: "-0.02em", color }}>
      Oslo <span style={{ color: accent }}>Vibe</span> Coding
    </span>
  );
}

const HANDLE = "@vibesoslo";
const URL = "oslovibecoding.tech";

/* ----- LinkedIn company covers (2400 x 400, 6:1) -----
   Company pages crop hard and mobile keeps only the center ~900px, so content is
   centered inside the safe middle and the bottom-left is left clear for the logo. */

// Crop-proof: a compact, dead-centered brand block with large margins on every
// side, so LinkedIn's aggressive company-page crop (and mobile's center-only
// view) can never cut the wordmark or the line. The logo sits over empty corner.
function LinkedInCompanyEmber() {
  return (
    <div style={{ width: 2400, height: 400, position: "relative", overflow: "hidden", background: `linear-gradient(110deg, ${C.ember} 0%, #ff7a33 55%, ${C.amber} 135%)`, display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>
      <Glow style={{ width: 560, height: 560, top: -260, right: 320, background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 65%)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <Spark size={58} id="li-co-ember-spark" solid={C.night} />
          <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 86, letterSpacing: "-0.02em", color: C.night }}>Oslo Vibe Coding</span>
        </div>
        <span style={{ fontFamily: MONO, fontSize: 30, letterSpacing: "0.04em", color: C.night, opacity: 0.85 }}>
          Free AI coding sessions · {URL}
        </span>
      </div>
    </div>
  );
}

function LinkedInCompanyNight() {
  return (
    <div style={{ width: 2400, height: 400, position: "relative", overflow: "hidden", background: C.night, display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>
      <Glow style={{ width: 780, height: 780, top: -250, left: "50%", marginLeft: -390, background: "radial-gradient(circle, rgba(255,90,44,0.4), transparent 62%)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <Spark size={58} id="li-co-night-spark" />
          <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 86, letterSpacing: "-0.02em", color: C.paper }}>
            Oslo <span style={{ color: C.glow }}>Vibe</span> Coding
          </span>
        </div>
        <span style={{ fontFamily: MONO, fontSize: 30, letterSpacing: "0.04em", color: C.creamDim }}>
          No one codes alone. · {URL}
        </span>
      </div>
    </div>
  );
}

function LinkedInPersonalNight() {
  return (
    <div style={{ width: 1584, height: 396, position: "relative", overflow: "hidden", background: C.night, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", boxSizing: "border-box", padding: "0 150px" }}>
      <Glow style={{ width: 540, height: 540, top: -240, right: -120, background: "radial-gradient(circle, rgba(255,90,44,0.45), transparent 65%)" }} />
      <Glow style={{ width: 360, height: 360, bottom: -200, left: 120, background: "radial-gradient(circle, rgba(255,176,32,0.28), transparent 65%)" }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16 }}>
        <Spark size={44} id="li-pn-spark" />
        <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", color: C.glow }}>Code · Chill · Learn</span>
      </div>
      <div style={{ position: "relative", marginTop: 20, fontFamily: DISPLAY, fontWeight: 700, fontSize: 84, lineHeight: 1, letterSpacing: "-0.03em", color: C.paper, whiteSpace: "nowrap" }}>
        No one codes <span style={{ color: C.glow }}>alone</span>.
      </div>
      <div style={{ position: "relative", marginTop: 18, fontFamily: MONO, fontSize: 24, color: C.creamDim }}>Free AI coding sessions · {URL}</div>
    </div>
  );
}

function LinkedInPersonalEmber() {
  return (
    <div style={{ width: 1584, height: 396, position: "relative", overflow: "hidden", background: `linear-gradient(115deg, ${C.ember} 0%, #ff7a33 55%, ${C.amber} 135%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", boxSizing: "border-box", padding: "0 120px" }}>
      <Glow style={{ width: 480, height: 480, top: -220, right: 60, background: "radial-gradient(circle, rgba(255,255,255,0.22), transparent 65%)" }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16 }}>
        <Spark size={40} id="li-pe-spark" solid={C.night} />
        <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", color: C.night }}>Code · Chill · Learn</span>
      </div>
      <div style={{ position: "relative", marginTop: 20, fontFamily: DISPLAY, fontWeight: 700, fontSize: 54, lineHeight: 1.04, letterSpacing: "-0.02em", color: C.night, whiteSpace: "nowrap" }}>
        Free, drop-in AI coding sessions in Oslo
      </div>
      <div style={{ position: "relative", marginTop: 16, fontFamily: DISPLAY, fontWeight: 500, fontSize: 26, color: C.night, opacity: 0.85 }}>
        Bring a laptop and an idea · {URL}
      </div>
    </div>
  );
}

/* ---------------- Profile avatars (1080 x 1080) ---------------- */

function AvatarEmber() {
  return (
    <div style={{ width: 1080, height: 1080, position: "relative", overflow: "hidden", background: `radial-gradient(circle at 50% 42%, ${C.glow}, ${C.ember} 58%, #e0410f 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Spark size={560} id="av-ember-spark" solid={C.paper} />
    </div>
  );
}

function AvatarNight() {
  return (
    <div style={{ width: 1080, height: 1080, position: "relative", overflow: "hidden", background: C.night, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Glow style={{ width: 760, height: 760, top: 120, left: 160, background: "radial-gradient(circle, rgba(255,90,44,0.45), transparent 62%)" }} />
      <Spark size={560} id="av-night-spark" />
    </div>
  );
}

/* ---------------- Instagram posts (1080 x 1080) ---------------- */

function PostQuote({ data }: { data: AssetData }) {
  return (
    <div style={{ width: 1080, height: 1080, position: "relative", overflow: "hidden", background: C.night, boxSizing: "border-box", padding: 96, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Glow style={{ width: 620, height: 620, top: -240, right: -160, background: "radial-gradient(circle, rgba(255,90,44,0.5), transparent 65%)" }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
        <Spark size={56} id="post-quote-spark" />
        <span style={{ fontFamily: MONO, fontSize: 26, letterSpacing: "0.16em", textTransform: "uppercase", color: C.glow }}>Oslo Vibe Coding</span>
      </div>
      <div style={{ position: "relative", fontFamily: DISPLAY, fontWeight: 700, fontSize: 116, lineHeight: 1.02, letterSpacing: "-0.03em", color: C.paper }}>
        {data.headline}
      </div>
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: MONO, fontSize: 28, color: C.creamDim }}>
        <span>{HANDLE}</span>
        <span style={{ color: C.glow }}>{URL}</span>
      </div>
    </div>
  );
}

function PostAnnounce({ data }: { data: AssetData }) {
  return (
    <div style={{ width: 1080, height: 1080, position: "relative", overflow: "hidden", background: C.paper, boxSizing: "border-box", padding: 96, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Spark size={46} id="post-ann-spark" />
        <span style={{ fontFamily: MONO, fontSize: 26, letterSpacing: "0.16em", textTransform: "uppercase", color: C.emberInk }}>Free · Drop-in · Oslo</span>
      </div>
      <div>
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 104, lineHeight: 1.0, letterSpacing: "-0.03em", color: C.ink }}>
          {data.headline}
        </div>
        <div style={{ marginTop: 36, fontFamily: DISPLAY, fontWeight: 500, fontSize: 44, lineHeight: 1.25, color: C.inkSoft, maxWidth: 840 }}>
          {data.subline}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `2px solid ${C.line}`, paddingTop: 32, fontFamily: MONO, fontSize: 28, color: C.inkSoft }}>
        <span style={{ fontWeight: 600, color: C.ink }}>{HANDLE}</span>
        <span style={{ color: C.emberInk }}>{URL}</span>
      </div>
    </div>
  );
}

function PostInvite({ data }: { data: AssetData }) {
  return (
    <div style={{ width: 1080, height: 1080, position: "relative", overflow: "hidden", background: `linear-gradient(150deg, ${C.ember} 0%, #ff6a2e 55%, ${C.amber} 135%)`, boxSizing: "border-box", padding: 96, display: "flex", flexDirection: "column", justifyContent: "space-between", color: C.white }}>
      <Glow style={{ width: 560, height: 560, top: -220, right: -120, background: "radial-gradient(circle, rgba(255,255,255,0.22), transparent 65%)" }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16 }}>
        <Spark size={46} id="post-inv-spark" solid={C.white} />
        <span style={{ fontFamily: MONO, fontSize: 26, letterSpacing: "0.16em", textTransform: "uppercase", color: C.white }}>You are invited</span>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 112, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
          {data.headline}
        </div>
        <div style={{ marginTop: 32, fontFamily: DISPLAY, fontWeight: 500, fontSize: 46, lineHeight: 1.22, color: "rgba(255,255,255,0.92)", maxWidth: 840 }}>
          {data.subline}
        </div>
      </div>
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: MONO, fontSize: 28 }}>
        <span style={{ fontWeight: 600 }}>{HANDLE}</span>
        <span>{URL}</span>
      </div>
    </div>
  );
}

/* ---------------- Instagram story (1080 x 1920) ---------------- */

function StoryQuote({ data }: { data: AssetData }) {
  return (
    <div style={{ width: 1080, height: 1920, position: "relative", overflow: "hidden", background: C.night, boxSizing: "border-box", padding: "150px 96px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Glow style={{ width: 720, height: 720, top: -180, right: -200, background: "radial-gradient(circle, rgba(255,90,44,0.5), transparent 64%)" }} />
      <Glow style={{ width: 520, height: 520, bottom: 120, left: -180, background: "radial-gradient(circle, rgba(255,176,32,0.28), transparent 64%)" }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 20 }}>
        <Spark size={66} id="story-spark" />
        <Wordmark size={42} color={C.paper} accent={C.glow} />
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 132, lineHeight: 1.02, letterSpacing: "-0.03em", color: C.paper }}>
          {data.headline}
        </div>
        <div style={{ marginTop: 40, fontFamily: DISPLAY, fontWeight: 500, fontSize: 52, lineHeight: 1.25, color: C.creamDim, maxWidth: 820 }}>
          {data.subline}
        </div>
      </div>
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: MONO, fontSize: 32, color: C.creamDim }}>
        <span>{HANDLE}</span>
        <span style={{ color: C.glow }}>{URL}</span>
      </div>
    </div>
  );
}

export const BRAND_ASSETS: BrandAsset[] = [
  { id: "linkedin-company-ember", name: "Company cover · ember", group: "LinkedIn", w: 2400, h: 400, editable: false, note: "Company page cover (6:1). Centered for LinkedIn's crop; logo sits bottom-left.", Render: LinkedInCompanyEmber },
  { id: "linkedin-company-night", name: "Company cover · night", group: "LinkedIn", w: 2400, h: 400, editable: false, note: "Company page cover (6:1). Centered for LinkedIn's crop.", Render: LinkedInCompanyNight },
  { id: "linkedin-personal-night", name: "Personal banner · night", group: "LinkedIn", w: 1584, h: 396, editable: false, note: "Founders' personal profiles. 1584×396.", Render: LinkedInPersonalNight },
  { id: "linkedin-personal-ember", name: "Personal banner · ember", group: "LinkedIn", w: 1584, h: 396, editable: false, note: "Founders' personal profiles. 1584×396.", Render: LinkedInPersonalEmber },
  { id: "avatar-ember", name: "Profile photo · ember", group: "Instagram", w: 1080, h: 1080, editable: false, note: "DP / logo. Shows as a circle, mark stays centered.", Render: AvatarEmber },
  { id: "avatar-night", name: "Profile photo · night", group: "Instagram", w: 1080, h: 1080, editable: false, note: "DP / logo. Shows as a circle, mark stays centered.", Render: AvatarNight },
  { id: "post-quote", name: "Post · statement", group: "Instagram", w: 1080, h: 1080, editable: true, note: "1080×1080. Edit the headline above.", Render: PostQuote },
  { id: "post-announce", name: "Post · announcement", group: "Instagram", w: 1080, h: 1080, editable: true, note: "1080×1080. Edit headline + subline.", Render: PostAnnounce },
  { id: "post-invite", name: "Post · invite", group: "Instagram", w: 1080, h: 1080, editable: true, note: "1080×1080. Edit headline + subline.", Render: PostInvite },
  { id: "story-quote", name: "Story · statement", group: "Instagram", w: 1080, h: 1920, editable: true, note: "1080×1920 story. Edit headline + subline.", Render: StoryQuote },
];
