import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: deployable to any static host.
  output: "export",
  // There is no image server in a static export.
  images: { unoptimized: true },
  // Set by the Pages workflow when the site lives under /<repo>.
  basePath: process.env.BASE_PATH || undefined,
  // Dev server is reached through this host instead of localhost.
  allowedDevOrigins: ["dev.gatoartstudio.com"],
};

export default nextConfig;
