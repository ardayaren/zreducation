import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const file = await readFile(
    join(process.cwd(), "public/images/logo-icon.png")
  );
  const src = `data:image/png;base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={src}
          width={168}
          height={168}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
