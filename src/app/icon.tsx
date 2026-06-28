import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Branded favicon: the ember spark on a warm-dark tile.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#110f17",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="#ff5a2c">
          <path d="M12 1.5c.9 5.4 4.2 8.7 9.6 9.6v1.8c-5.4.9-8.7 4.2-9.6 9.6h-1.8c-.9-5.4-4.2-8.7-9.6-9.6v-1.8c5.4-.9 8.7-4.2 9.6-9.6h1.8Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
