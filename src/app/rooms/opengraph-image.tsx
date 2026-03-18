import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Studios & apartments — Monika & Damien, Kastellorizo";
export const size = { width: 1200, height: 630 };
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A5C8A",
          padding: 48,
        }}
      >
        <p
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            margin: 0,
            maxWidth: 1000,
            lineHeight: 1.15,
          }}
        >
          Studios & Apartments
        </p>
        <p
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.92)",
            marginTop: 20,
            margin: 0,
          }}
        >
          Kastellorizo · Dodecanese · Greece
        </p>
      </div>
    ),
    { ...size }
  );
}
