/* eslint-disable @next/next/no-img-element */
// Poster templates. Each renders the same PosterData in a different 1080x1920 layout,
// all on-brand (ember / cream / ink / Space Grotesk). Pick one in the Poster Maker.

import type { PosterData } from "./PosterCanvas";

const C = {
  night: "#110f17",
  night2: "#1b1822",
  nightLine: "#2e2a39",
  ink: "#16151c",
  paper: "#fbf7f0",
  mist: "#f3ede1",
  line: "#e7ddcd",
  ember: "#ff5a2c",
  amber: "#ffb020",
  glow: "#ff7a4d",
  cream: "#d9d2c6",
  faint: "#8a8694",
};
const DISPLAY = "var(--font-space-grotesk), var(--font-geist-sans), sans-serif";
const MONO = "var(--font-geist-mono), monospace";
const SPARK_PATH =
  "M12 1.5c.9 5.4 4.2 8.7 9.6 9.6v1.8c-5.4.9-8.7 4.2-9.6 9.6h-1.8c-.9-5.4-4.2-8.7-9.6-9.6v-1.8c5.4-.9 8.7-4.2 9.6-9.6h1.8Z";

function Spark({ size = 48, fill = C.ember }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d={SPARK_PATH} />
    </svg>
  );
}

function Wordmark({ color = C.paper, accent = C.glow, size = 34, sparkSize = 46 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Spark size={sparkSize} fill={C.ember} />
      <span style={{ fontSize: size, fontWeight: 700, letterSpacing: -0.5, color, fontFamily: DISPLAY }}>
        Oslo <span style={{ color: accent }}>Vibe</span> Coding
      </span>
    </div>
  );
}

function Chip({ text, dark = true }: { text: string; dark?: boolean }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        border: `1px solid ${dark ? C.nightLine : C.line}`,
        background: dark ? "rgba(255,255,255,0.05)" : "#fff",
        borderRadius: 999,
        padding: "14px 26px",
        fontSize: 24,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: dark ? C.cream : C.ink,
        fontFamily: MONO,
      }}
    >
      <span style={{ width: 12, height: 12, borderRadius: 999, background: C.ember }} />
      {text}
    </div>
  );
}

function Qr({ data, size = 300, pad = 24 }: { data: string; size?: number; pad?: number }) {
  return (
    <div style={{ background: "#fff", borderRadius: 28, padding: pad, display: "flex" }}>
      {data ? (
        <img src={data} alt="RSVP QR code" width={size} height={size} style={{ display: "block", width: size, height: size }} />
      ) : (
        <div style={{ width: size, height: size, background: C.mist, borderRadius: 12 }} />
      )}
    </div>
  );
}

function Details({ data, labelColor = C.faint, valueColor = C.paper, subColor = C.cream, gap = 40 }: {
  data: PosterData;
  labelColor?: string;
  valueColor?: string;
  subColor?: string;
  gap?: number;
}) {
  const rows = [
    { k: "When", v: data.dateLabel },
    { k: "Time", v: data.timeLabel },
    { k: "Where", v: data.venue, sub: data.address },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      {rows.map((r) => (
        <div key={r.k}>
          <div style={{ fontSize: 24, letterSpacing: 3, textTransform: "uppercase", color: labelColor, fontFamily: MONO }}>
            {r.k}
          </div>
          <div style={{ fontSize: 50, fontWeight: 700, marginTop: 8, lineHeight: 1.05, color: valueColor, fontFamily: DISPLAY }}>
            {r.v}
          </div>
          {r.sub ? <div style={{ fontSize: 30, color: subColor, marginTop: 4 }}>{r.sub}</div> : null}
        </div>
      ))}
    </div>
  );
}

function ScanLabel({ data, color = C.glow }: { data: PosterData; color?: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: 18, fontSize: 30, fontWeight: 700, color, fontFamily: DISPLAY }}>Scan to RSVP</div>
      <div style={{ marginTop: 4, fontSize: 24, color: C.cream }}>{data.rsvpLabel}</div>
    </div>
  );
}

const base = (extra: React.CSSProperties): React.CSSProperties => ({
  position: "absolute",
  inset: 0,
  boxSizing: "border-box",
  fontFamily: DISPLAY,
  display: "flex",
  ...extra,
});

// ---- Templates ---------------------------------------------------------------

function Night({ data }: { data: PosterData }) {
  return (
    <div
      style={base({
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 88,
        color: C.paper,
        background: C.night,
        backgroundImage:
          "radial-gradient(760px circle at 86% 6%, rgba(255,90,44,0.42), transparent 58%), radial-gradient(620px circle at 8% 96%, rgba(255,176,32,0.22), transparent 60%)",
      })}
    >
      <div>
        <Wordmark />
        <div style={{ marginTop: 64 }}>
          <Chip text={data.eyebrow} />
        </div>
        <h1 style={{ margin: "40px 0 0", fontSize: 132, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3, maxWidth: 900 }}>
          {data.title}
        </h1>
        <div style={{ marginTop: 36, height: 6, width: 132, borderRadius: 999, background: C.ember }} />
        <p style={{ marginTop: 36, fontSize: 38, lineHeight: 1.35, color: C.cream, maxWidth: 820 }}>{data.tagline}</p>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, paddingBottom: 60 }}>
        <Details data={data} />
        <div>
          <Qr data={data.qrDataUrl} />
          <ScanLabel data={data} />
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
}

function Daylight({ data }: { data: PosterData }) {
  return (
    <div
      style={base({
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 88,
        color: C.ink,
        background: C.paper,
        backgroundImage: "radial-gradient(620px circle at 92% 4%, rgba(255,90,44,0.16), transparent 60%)",
      })}
    >
      <div>
        <Wordmark color={C.ink} accent="#d83c12" />
        <div style={{ marginTop: 64 }}>
          <Chip text={data.eyebrow} dark={false} />
        </div>
        <h1 style={{ margin: "40px 0 0", fontSize: 134, fontWeight: 800, lineHeight: 0.96, letterSpacing: -3, maxWidth: 900, color: C.ink }}>
          {data.title}
        </h1>
        <div style={{ marginTop: 36, height: 6, width: 132, borderRadius: 999, background: C.ember }} />
        <p style={{ marginTop: 36, fontSize: 38, lineHeight: 1.35, color: "#4b4956", maxWidth: 820 }}>{data.tagline}</p>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, paddingBottom: 60 }}>
        <Details data={data} labelColor="#8a8694" valueColor={C.ink} subColor="#4b4956" />
        <div>
          <div style={{ background: C.ink, borderRadius: 28, padding: 24, display: "flex" }}>
            <Qr data={data.qrDataUrl} pad={0} />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ marginTop: 18, fontSize: 30, fontWeight: 700, color: "#d83c12", fontFamily: DISPLAY }}>Scan to RSVP</div>
            <div style={{ marginTop: 4, fontSize: 24, color: "#4b4956" }}>{data.rsvpLabel}</div>
          </div>
        </div>
      </div>
      <Footer data={data} light />
    </div>
  );
}

function EmberWall({ data }: { data: PosterData }) {
  return (
    <div style={base({ flexDirection: "column", justifyContent: "space-between", padding: 88, color: "#fff", background: C.ember })}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Spark size={46} fill="#fff" />
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5, color: "#fff", fontFamily: DISPLAY }}>
            Oslo Vibe Coding
          </span>
        </div>
        <div
          style={{
            marginTop: 64,
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: 999,
            padding: "14px 26px",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#fff",
            fontFamily: MONO,
          }}
        >
          {data.eyebrow}
        </div>
        <h1 style={{ margin: "40px 0 0", fontSize: 140, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3, maxWidth: 900, color: "#fff" }}>
          {data.title}
        </h1>
        <p style={{ marginTop: 40, fontSize: 40, lineHeight: 1.3, color: "rgba(255,255,255,0.92)", maxWidth: 820 }}>{data.tagline}</p>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, paddingBottom: 40 }}>
        <Details data={data} labelColor="rgba(255,255,255,0.7)" valueColor="#fff" subColor="rgba(255,255,255,0.85)" />
        <div>
          <Qr data={data.qrDataUrl} />
          <div style={{ textAlign: "center", marginTop: 18, fontSize: 30, fontWeight: 700, color: "#fff", fontFamily: DISPLAY }}>
            Scan to RSVP
          </div>
          <div style={{ textAlign: "center", marginTop: 4, fontSize: 24, color: "rgba(255,255,255,0.85)" }}>{data.rsvpLabel}</div>
        </div>
      </div>
    </div>
  );
}

function Split({ data }: { data: PosterData }) {
  return (
    <div style={base({ flexDirection: "column" })}>
      <div
        style={{
          height: "56%",
          background: C.night,
          backgroundImage: "radial-gradient(620px circle at 88% 12%, rgba(255,90,44,0.4), transparent 60%)",
          padding: 88,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: C.paper,
        }}
      >
        <Wordmark />
        <div>
          <Chip text={data.eyebrow} />
          <h1 style={{ margin: "32px 0 0", fontSize: 124, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3, maxWidth: 900 }}>
            {data.title}
          </h1>
          <p style={{ marginTop: 28, fontSize: 36, lineHeight: 1.3, color: C.cream, maxWidth: 760 }}>{data.tagline}</p>
        </div>
      </div>
      <div style={{ height: "44%", background: C.paper, padding: 88, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <Details data={data} labelColor="#8a8694" valueColor={C.ink} subColor="#4b4956" gap={32} />
        <div>
          <div style={{ background: C.ink, borderRadius: 28, padding: 24, display: "flex" }}>
            <Qr data={data.qrDataUrl} pad={0} size={260} />
          </div>
          <div style={{ textAlign: "center", marginTop: 14, fontSize: 28, fontWeight: 700, color: "#d83c12", fontFamily: DISPLAY }}>
            Scan to RSVP
          </div>
        </div>
      </div>
    </div>
  );
}

function Editorial({ data }: { data: PosterData }) {
  return (
    <div style={base({ flexDirection: "column", justifyContent: "space-between", padding: 80, background: C.paper, color: C.ink })}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Wordmark color={C.ink} accent="#d83c12" size={30} sparkSize={40} />
        <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: "#8a8694" }}>
          {data.eyebrow}
        </span>
      </div>
      <h1 style={{ fontSize: 180, fontWeight: 800, lineHeight: 0.9, letterSpacing: -6, color: C.ink, margin: 0 }}>
        {data.title}
      </h1>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, borderTop: `2px solid ${C.ink}`, paddingTop: 40 }}>
        <div>
          <p style={{ fontSize: 40, fontWeight: 700, color: C.ink, margin: 0, maxWidth: 640 }}>{data.tagline}</p>
          <div style={{ marginTop: 28, fontSize: 36, color: "#4b4956" }}>
            {data.dateLabel} · {data.timeLabel}
          </div>
          <div style={{ marginTop: 6, fontSize: 32, color: "#4b4956" }}>
            {data.venue}, {data.address}
          </div>
          <div style={{ marginTop: 6, fontSize: 28, color: "#8a8694" }}>{data.footer}</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Qr data={data.qrDataUrl} size={230} pad={20} />
          <div style={{ marginTop: 10, fontSize: 24, fontWeight: 700, color: "#d83c12", fontFamily: MONO }}>RSVP</div>
        </div>
      </div>
    </div>
  );
}

function Centered({ data }: { data: PosterData }) {
  return (
    <div
      style={base({
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 88,
        background: C.night,
        backgroundImage: "radial-gradient(720px circle at 50% 18%, rgba(255,90,44,0.34), transparent 62%)",
        color: C.paper,
        gap: 0,
      })}
    >
      <Spark size={64} fill={C.glow} />
      <div style={{ marginTop: 28 }}>
        <Chip text={data.eyebrow} />
      </div>
      <h1 style={{ margin: "36px 0 0", fontSize: 128, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3, maxWidth: 880 }}>
        {data.title}
      </h1>
      <p style={{ marginTop: 30, fontSize: 38, lineHeight: 1.35, color: C.cream, maxWidth: 760 }}>{data.tagline}</p>
      <div style={{ marginTop: 44, fontSize: 44, fontWeight: 700 }}>
        {data.dateLabel} · {data.timeLabel}
      </div>
      <div style={{ marginTop: 8, fontSize: 34, color: C.cream }}>{data.venue}</div>
      <div style={{ marginTop: 44 }}>
        <Qr data={data.qrDataUrl} size={260} />
      </div>
      <div style={{ marginTop: 16, fontSize: 28, fontWeight: 700, color: C.glow, fontFamily: DISPLAY }}>Scan to RSVP · {data.rsvpLabel}</div>
    </div>
  );
}

function Ticket({ data }: { data: PosterData }) {
  return (
    <div style={base({ flexDirection: "column", justifyContent: "center", padding: 70, background: C.mist })}>
      <div style={{ borderRadius: 40, overflow: "hidden", background: C.paper, border: `1px solid ${C.line}`, boxShadow: "0 40px 100px -40px rgba(0,0,0,0.35)" }}>
        <div style={{ background: C.night, padding: "56px 64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Wordmark size={32} sparkSize={42} />
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: C.glow }}>{data.eyebrow}</span>
        </div>
        <div style={{ padding: 64 }}>
          <h1 style={{ fontSize: 116, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3, color: C.ink, margin: 0 }}>{data.title}</h1>
          <p style={{ marginTop: 24, fontSize: 36, color: "#4b4956", maxWidth: 760 }}>{data.tagline}</p>
        </div>
        <div style={{ borderTop: `4px dashed ${C.line}`, display: "flex" }}>
          <div style={{ flex: 1, padding: 64 }}>
            <Details data={data} labelColor="#8a8694" valueColor={C.ink} subColor="#4b4956" gap={28} />
          </div>
          <div style={{ width: 360, padding: 56, borderLeft: `4px dashed ${C.line}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Qr data={data.qrDataUrl} size={250} pad={0} />
            <div style={{ marginTop: 16, fontSize: 28, fontWeight: 700, color: "#d83c12", fontFamily: DISPLAY }}>Scan to RSVP</div>
            <div style={{ marginTop: 4, fontSize: 22, color: "#8a8694" }}>{data.rsvpLabel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SparkField({ data }: { data: PosterData }) {
  const sparks = [
    { x: 120, y: 220, s: 30, o: 0.5 },
    { x: 900, y: 160, s: 46, o: 0.8 },
    { x: 760, y: 520, s: 22, o: 0.5 },
    { x: 180, y: 700, s: 18, o: 0.4 },
    { x: 980, y: 900, s: 28, o: 0.4 },
    { x: 90, y: 1180, s: 24, o: 0.5 },
  ];
  return (
    <div
      style={base({
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 88,
        background: C.night,
        backgroundImage:
          "radial-gradient(700px circle at 80% 90%, rgba(255,90,44,0.4), transparent 60%), radial-gradient(500px circle at 12% 8%, rgba(255,176,32,0.28), transparent 60%)",
        color: C.paper,
      })}
    >
      {sparks.map((sp, i) => (
        <div key={i} style={{ position: "absolute", left: sp.x, top: sp.y, opacity: sp.o }}>
          <Spark size={sp.s} fill={C.amber} />
        </div>
      ))}
      <div style={{ position: "relative" }}>
        <Wordmark />
        <div style={{ marginTop: 64 }}>
          <Chip text={data.eyebrow} />
        </div>
        <h1 style={{ margin: "40px 0 0", fontSize: 130, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3, maxWidth: 900 }}>
          {data.title}
        </h1>
        <p style={{ marginTop: 34, fontSize: 38, lineHeight: 1.35, color: C.cream, maxWidth: 800 }}>{data.tagline}</p>
      </div>
      <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, paddingBottom: 40 }}>
        <Details data={data} />
        <div>
          <Qr data={data.qrDataUrl} />
          <ScanLabel data={data} />
        </div>
      </div>
    </div>
  );
}

function Sidebar({ data }: { data: PosterData }) {
  return (
    <div style={base({ flexDirection: "row" })}>
      <div style={{ width: 300, background: C.ember, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "70px 0" }}>
        <Spark size={64} fill="#fff" />
        <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap", fontFamily: MONO, fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#fff" }}>
          {data.footer}
        </div>
        <div style={{ background: "#fff", borderRadius: 22, padding: 18, display: "flex" }}>
          <Qr data={data.qrDataUrl} size={200} pad={0} />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          background: C.night,
          backgroundImage: "radial-gradient(560px circle at 80% 10%, rgba(255,90,44,0.34), transparent 62%)",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: C.paper,
        }}
      >
        <span style={{ fontSize: 30, fontWeight: 700, fontFamily: DISPLAY }}>
          Oslo <span style={{ color: C.glow }}>Vibe</span> Coding
        </span>
        <div>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: C.glow }}>{data.eyebrow}</span>
          <h1 style={{ margin: "20px 0 0", fontSize: 120, fontWeight: 800, lineHeight: 0.97, letterSpacing: -3 }}>{data.title}</h1>
          <p style={{ marginTop: 28, fontSize: 36, lineHeight: 1.3, color: C.cream, maxWidth: 620 }}>{data.tagline}</p>
        </div>
        <Details data={data} gap={30} />
      </div>
    </div>
  );
}

function Manifesto({ data }: { data: PosterData }) {
  return (
    <div
      style={base({
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 88,
        background: C.night,
        backgroundImage: "radial-gradient(720px circle at 20% 80%, rgba(255,90,44,0.36), transparent 60%)",
        color: C.paper,
      })}
    >
      <Wordmark />
      <div>
        <Spark size={56} fill={C.glow} />
        <h1
          style={{
            margin: "28px 0 0",
            fontSize: 116,
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: -3,
            maxWidth: 940,
            backgroundImage: `linear-gradient(100deg, ${C.ember}, ${C.amber})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {data.tagline}
        </h1>
        <p style={{ marginTop: 30, fontSize: 38, color: C.cream, maxWidth: 760 }}>{data.title}</p>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40 }}>
        <div>
          <div style={{ fontSize: 44, fontWeight: 700 }}>{data.dateLabel}</div>
          <div style={{ marginTop: 8, fontSize: 34, color: C.cream }}>
            {data.timeLabel} · {data.venue}
          </div>
          <div style={{ marginTop: 6, fontSize: 28, color: C.faint }}>{data.address}</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Qr data={data.qrDataUrl} size={230} />
          <div style={{ marginTop: 12, fontSize: 26, fontWeight: 700, color: C.glow, fontFamily: DISPLAY }}>Scan to RSVP</div>
        </div>
      </div>
    </div>
  );
}

function Gradient({ data }: { data: PosterData }) {
  return (
    <div
      style={base({
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 88,
        color: C.ink,
        background: `linear-gradient(160deg, ${C.amber} 0%, ${C.ember} 55%, #e8431f 100%)`,
      })}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Spark size={46} fill={C.ink} />
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5, color: C.ink, fontFamily: DISPLAY }}>Oslo Vibe Coding</span>
        </div>
        <div style={{ marginTop: 64, display: "inline-flex", alignItems: "center", gap: 14, border: `1px solid rgba(20,19,26,0.3)`, borderRadius: 999, padding: "14px 26px", fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: C.ink, fontFamily: MONO }}>
          {data.eyebrow}
        </div>
        <h1 style={{ margin: "40px 0 0", fontSize: 138, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3, maxWidth: 900, color: C.ink }}>{data.title}</h1>
        <p style={{ marginTop: 36, fontSize: 40, lineHeight: 1.3, color: "rgba(20,19,26,0.82)", maxWidth: 820 }}>{data.tagline}</p>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, paddingBottom: 30 }}>
        <Details data={data} labelColor="rgba(20,19,26,0.6)" valueColor={C.ink} subColor="rgba(20,19,26,0.75)" />
        <div>
          <div style={{ background: C.ink, borderRadius: 28, padding: 24, display: "flex" }}>
            <Qr data={data.qrDataUrl} pad={0} />
          </div>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: 30, fontWeight: 700, color: C.ink, fontFamily: DISPLAY }}>Scan to RSVP</div>
        </div>
      </div>
    </div>
  );
}

function Terminal({ data }: { data: PosterData }) {
  const row = (k: string, v: string) => (
    <div style={{ display: "flex", gap: 18, fontFamily: MONO, fontSize: 34 }}>
      <span style={{ color: C.glow }}>{k}</span>
      <span style={{ color: C.paper }}>{v}</span>
    </div>
  );
  return (
    <div style={base({ flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#0c0b10", color: C.paper })}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: MONO, fontSize: 24, color: C.faint }}>
        <span style={{ width: 18, height: 18, borderRadius: 999, background: "#ff5f57" }} />
        <span style={{ width: 18, height: 18, borderRadius: 999, background: "#febc2e" }} />
        <span style={{ width: 18, height: 18, borderRadius: 999, background: "#28c840" }} />
        <span style={{ marginLeft: 20 }}>oslo-vibe-coding ~ %</span>
      </div>
      <div>
        <div style={{ fontFamily: MONO, fontSize: 32, color: C.glow }}>$ open {data.eyebrow.toLowerCase().replace(/ · /g, "-").replace(/ /g, "-")}</div>
        <h1 style={{ margin: "24px 0 0", fontSize: 124, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3, maxWidth: 920 }}>
          {data.title}
          <span style={{ color: C.ember }}>_</span>
        </h1>
        <p style={{ marginTop: 30, fontFamily: MONO, fontSize: 34, color: C.cream, maxWidth: 820 }}>{"// "}{data.tagline}</p>
        <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 16 }}>
          {row("when:", `${data.dateLabel}, ${data.timeLabel}`)}
          {row("where:", `${data.venue}, ${data.address}`)}
          {row("cost:", "free")}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div style={{ fontFamily: MONO, fontSize: 28, color: C.faint }}>{data.footer}</div>
        <div style={{ textAlign: "center" }}>
          <Qr data={data.qrDataUrl} size={230} />
          <div style={{ marginTop: 12, fontFamily: MONO, fontSize: 26, color: C.glow }}>scan to rsvp</div>
        </div>
      </div>
    </div>
  );
}

function Footer({ data, light = false }: { data: PosterData; light?: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 88,
        right: 88,
        bottom: 40,
        borderTop: `1px solid ${light ? C.line : C.nightLine}`,
        paddingTop: 24,
        display: "flex",
        justifyContent: "space-between",
        fontSize: 26,
        color: light ? "#8a8694" : C.faint,
      }}
    >
      <span style={{ color: light ? "#4b4956" : C.cream }}>{data.footer}</span>
      <span>oslovibecoding.tech</span>
    </div>
  );
}

export type PosterTemplate = { id: string; name: string; Render: (props: { data: PosterData }) => React.ReactElement };

export const POSTER_TEMPLATES: PosterTemplate[] = [
  { id: "night", name: "Night Spark", Render: Night },
  { id: "daylight", name: "Daylight", Render: Daylight },
  { id: "ember", name: "Ember Wall", Render: EmberWall },
  { id: "split", name: "Split", Render: Split },
  { id: "editorial", name: "Big Type", Render: Editorial },
  { id: "centered", name: "Centered", Render: Centered },
  { id: "ticket", name: "Ticket", Render: Ticket },
  { id: "sparkfield", name: "Spark Field", Render: SparkField },
  { id: "sidebar", name: "Sidebar", Render: Sidebar },
  { id: "manifesto", name: "Manifesto", Render: Manifesto },
  { id: "gradient", name: "Gradient", Render: Gradient },
  { id: "terminal", name: "Terminal", Render: Terminal },
];
