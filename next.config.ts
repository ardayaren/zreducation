import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/icon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
