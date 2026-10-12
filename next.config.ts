import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: deployable to any static host.
  output: "export",
  // There is no image server in a static export.
  images: { unoptimized: true },
  // Dev server is reached through this host instead of localhost.
  allowedDevOrigins: ["dev.gatoartstudio.com"],
};

export default nextConfig;
