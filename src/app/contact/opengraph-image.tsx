import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Contact — Monika & Damien Studios, Kastellorizo";
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
            fontSize: 52,
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            margin: 0,
          }}
        >
          Contact & bookings
        </p>
        <p
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.9)",
            marginTop: 24,
            margin: 0,
          }}
        >
          Monika & Damien Studios · Kastellorizo, Greece
        </p>
      </div>
    ),
    { ...size }
  );
}
