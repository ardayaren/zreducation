import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "linear-gradient(145deg, #1e3d63 0%, #0e2240 50%, #081526 100%)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontSize: 13,
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
