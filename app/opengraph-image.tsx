import { ImageResponse } from "next/og";

export const alt = "Piraisudan R — Full Stack Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#d97706",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Piraisudan R
          </div>
          <div
            style={{
              display: "flex",
              color: "#d1d5db",
              fontSize: 36,
              marginTop: 16,
            }}
          >
            Full Stack Engineer
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#9ca3af",
            fontSize: 24,
          }}
        >
          React · TypeScript · Next.js · PostgreSQL
        </div>
      </div>
    ),
    { ...size },
  );
}
