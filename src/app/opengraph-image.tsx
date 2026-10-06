import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 96px",
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "radial-gradient(900px 450px at 50% -120px, rgba(247, 246, 243, 0.08), transparent 70%)",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#e7dcc3",
        }}
      >
        {profile.role}
      </div>
      <div style={{ marginTop: 24, fontSize: 112, lineHeight: 1.05 }}>
        {profile.name}
      </div>
      <div
        style={{
          marginTop: 40,
          paddingTop: 32,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          fontSize: 32,
          color: "#a3a3a3",
        }}
      >
        {profile.tagline}
      </div>
      <div
        style={{
          position: "absolute",
          right: 96,
          bottom: 72,
          fontSize: 24,
          color: "#737373",
        }}
      >
        luca-avila.com
      </div>
    </div>,
    size,
  );
}
