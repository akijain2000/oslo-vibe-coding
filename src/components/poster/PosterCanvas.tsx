/* eslint-disable @next/next/no-img-element */
// The poster itself: a fixed 1080x1920 Instagram-story canvas in the brand identity.
// Rendered at true size so html-to-image can export it crisp. The maker scales it down
// for preview via a CSS transform on the parent — this node stays 1080x1920.

import { forwardRef } from "react";

export type PosterData = {
  eyebrow: string;
  title: string;
  tagline: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  address: string;
  rsvpLabel: string;
  qrDataUrl: string;
  footer: string;
};

const ink = "#16151c";

const PosterCanvas = forwardRef<HTMLDivElement, { data: PosterData }>(function PosterCanvas(
  { data },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        overflow: "hidden",
        background: "#110f17",
        backgroundImage:
          "radial-gradient(760px circle at 86% 6%, rgba(255,90,44,0.42), transparent 58%), radial-gradient(620px circle at 8% 96%, rgba(255,176,32,0.22), transparent 60%)",
        fontFamily: "var(--font-space-grotesk), var(--font-geist-sans), sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 88,
        color: "#fbf7f0",
        boxSizing: "border-box",
      }}
    >
      {/* top: brand + headline */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="48" height="48" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="poster-spark" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff5a2c" />
                <stop offset="1" stopColor="#ffb020" />
              </linearGradient>
            </defs>
            <path
              fill="url(#poster-spark)"
              d="M12 1.5c.9 5.4 4.2 8.7 9.6 9.6v1.8c-5.4.9-8.7 4.2-9.6 9.6h-1.8c-.9-5.4-4.2-8.7-9.6-9.6v-1.8c5.4-.9 8.7-4.2 9.6-9.6h1.8Z"
            />
          </svg>
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            Oslo <span style={{ color: "#ff7a4d" }}>Vibe</span> Coding
          </span>
        </div>

        <div
          style={{
            marginTop: 64,
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            border: "1px solid #2e2a39",
            background: "rgba(255,255,255,0.05)",
            borderRadius: 999,
            padding: "14px 26px",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d9d2c6",
            fontFamily: "var(--font-geist-mono), monospace",
          }}
        >
          <span style={{ width: 12, height: 12, borderRadius: 999, background: "#ff5a2c" }} />
          {data.eyebrow}
        </div>

        <h1
          style={{
            margin: "40px 0 0",
            fontSize: 132,
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: -3,
            maxWidth: 900,
          }}
        >
          {data.title}
        </h1>

        <div style={{ marginTop: 36, height: 6, width: 132, borderRadius: 999, background: "#ff5a2c" }} />

        <p style={{ marginTop: 36, fontSize: 38, lineHeight: 1.35, color: "#d9d2c6", maxWidth: 820 }}>
          {data.tagline}
        </p>
      </div>

      {/* bottom: details + QR */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {[
            { k: "When", v: `${data.dateLabel}` },
            { k: "Time", v: data.timeLabel },
            { k: "Where", v: data.venue, sub: data.address },
          ].map((row) => (
            <div key={row.k}>
              <div
                style={{
                  fontSize: 24,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#8a8694",
                  fontFamily: "var(--font-geist-mono), monospace",
                }}
              >
                {row.k}
              </div>
              <div style={{ fontSize: 50, fontWeight: 700, marginTop: 8, lineHeight: 1.05 }}>{row.v}</div>
              {row.sub ? <div style={{ fontSize: 30, color: "#d9d2c6", marginTop: 4 }}>{row.sub}</div> : null}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ background: "#fff", borderRadius: 28, padding: 24 }}>
            {data.qrDataUrl ? (
              <img
                src={data.qrDataUrl}
                alt="RSVP QR code"
                width={300}
                height={300}
                style={{ display: "block", width: 300, height: 300 }}
              />
            ) : (
              <div style={{ width: 300, height: 300, background: "#f3ede1", borderRadius: 12 }} />
            )}
          </div>
          <div style={{ marginTop: 20, fontSize: 32, fontWeight: 700, color: "#ff7a4d" }}>Scan to RSVP</div>
          <div style={{ marginTop: 6, fontSize: 26, color: "#d9d2c6" }}>{data.rsvpLabel}</div>
        </div>
      </div>

      {/* footer strip */}
      <div
        style={{
          position: "absolute",
          left: 88,
          right: 88,
          bottom: 40,
          borderTop: "1px solid #2e2a39",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 26,
          color: "#8a8694",
          background: "transparent",
        }}
      >
        <span style={{ color: ink === ink ? "#d9d2c6" : "#d9d2c6" }}>{data.footer}</span>
        <span>oslo-vibe-coding.vercel.app</span>
      </div>
    </div>
  );
});

export default PosterCanvas;
