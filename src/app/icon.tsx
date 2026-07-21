import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const file = await readFile(
    join(process.cwd(), "public/images/logo-favicon.png")
  );
  const src = `data:image/png;base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={src}
          width={30}
          height={30}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
