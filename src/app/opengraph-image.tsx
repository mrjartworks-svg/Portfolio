import { ImageResponse } from "next/og";

export const alt = "Mradul Jain · Product Designer";
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
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#f6f2eb",
          color: "#171717",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#c98864",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              width: 28,
              height: 2,
              backgroundColor: "#c98864",
            }}
          />
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Mradul Jain
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.2,
              color: "#c98864",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            Product Designer
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              color: "#525252",
              maxWidth: 820,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Enterprise systems, AI-assisted workflows, and operational tooling.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 18,
            color: "#737373",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ width: 12, height: 2, backgroundColor: "#d4a88a" }} />
          <div style={{ width: 12, height: 2, backgroundColor: "#d4a88a" }} />
          <div style={{ width: 12, height: 2, backgroundColor: "#d4a88a" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
