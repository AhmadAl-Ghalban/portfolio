import { ImageResponse } from "next/og";

import { siteConfig } from "@/shared/config";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "linear-gradient(135deg, #0e0e14 0%, #16161f 60%, #1c1a2e 100%)",
        color: "#ededf2",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28 }}>
        <span style={{ color: "#8b8bf4" }}>~/</span>
        <span style={{ color: "#a1a1ad" }}>ahmad-alghalban</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 36, color: "#a1a1ad" }}>
          {`${siteConfig.role} · React · Next.js · React Native · NestJS · Strapi`}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 26,
          color: "#8b8bf4",
        }}
      >
        <span>{siteConfig.location}</span>
        <span>{`github.com/${siteConfig.githubUsername}`}</span>
      </div>
    </div>,
    size,
  );
}
