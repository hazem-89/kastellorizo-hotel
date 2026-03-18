import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Monika & Damien Studios & Apartments — Kastellorizo, Greece";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A5C8A",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 20,
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.1,
              textAlign: "center",
              maxWidth: 1000,
            }}
          >
            Monika & Damien Studios & Apartments
          </p>
          <p
            style={{
              fontSize: 34,
              color: "rgba(255,255,255,0.95)",
              margin: 0,
              marginTop: 24,
              fontWeight: 500,
            }}
          >
            Studios & Apartments · Kastellorizo, Greece
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
