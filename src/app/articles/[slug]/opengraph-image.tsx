import { ImageResponse } from "next/og";
import { getArticle, articles } from "@/content/articles";

export const alt = "Oslo Vibe Coding article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Og({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  const title = article?.title ?? "Oslo Vibe Coding";
  const author = article?.author ?? "Oslo Vibe Coding";
  const mins = article?.readingTimeMin;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#110f17",
          backgroundImage:
            "radial-gradient(800px circle at 90% 10%, rgba(255,90,44,0.4), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 28, height: 28, background: "#ff5a2c", transform: "rotate(45deg)", borderRadius: 7 }} />
          <div style={{ color: "#d9d2c6", fontSize: 22, letterSpacing: 5, fontWeight: 600, textTransform: "uppercase" }}>
            Oslo Vibe Coding
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ color: "#fbf7f0", fontSize: title.length > 40 ? 68 : 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#8a8694", fontSize: 26 }}>
          <span style={{ color: "#ff7a4d", fontWeight: 700 }}>Article</span>
          <span style={{ color: "#d9d2c6" }}>{author}{mins ? ` · ${mins} min read` : ""}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
