import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LocalLaunch — Websites for Local Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0B1220",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(37,99,235,0.35), transparent 55%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          Local<span style={{ color: "#60A5FA" }}>Launch</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: "#CBD5E1",
          }}
        >
          Websites for Local Businesses
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "#60A5FA",
          }}
        >
          Modern websites &bull; Mobile-first &bull; SEO-ready
        </div>
      </div>
    ),
    { ...size }
  );
}
