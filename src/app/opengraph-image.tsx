import { ImageResponse } from "next/og";
import { upcomingEvent } from "@/content/events";

export const alt = "Oslo Vibe Coding: no one codes alone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Og() {
  const next = upcomingEvent;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#110f17",
          backgroundImage:
            "radial-gradient(800px circle at 88% 8%, rgba(255,90,44,0.42), transparent 60%), radial-gradient(700px circle at 10% 100%, rgba(255,176,32,0.25), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 30,
              height: 30,
              background: "#ff5a2c",
              transform: "rotate(45deg)",
              borderRadius: 8,
            }}
          />
          <div
            style={{
              color: "#d9d2c6",
              fontSize: 24,
              letterSpacing: 6,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Oslo Vibe Coding
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#fbf7f0",
              fontSize: 116,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: -3,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            No one codes&nbsp;<span style={{ color: "#ff7a4d" }}>alone.</span>
          </div>
          <div style={{ marginTop: 28, color: "#d9d2c6", fontSize: 34, maxWidth: 900 }}>
            Free, drop-in AI coding sessions in Oslo. Beginners genuinely welcome.
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#8a8694", fontSize: 26 }}>
          {next ? (
            <>
              <span style={{ color: "#ff7a4d", fontWeight: 700 }}>Next</span>
              <span style={{ color: "#d9d2c6" }}>
                {next.dateLabel} · {next.timeLabel} · {next.venue}
              </span>
            </>
          ) : (
            <span style={{ color: "#d9d2c6" }}>Code. Chill. Learn.</span>
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
