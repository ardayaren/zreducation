import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1e3d63 0%, #0e2240 50%, #081526 100%)",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#dbb84f",
            letterSpacing: "0.06em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          ZR
        </div>
      </div>
    ),
    { ...size }
  );
}
