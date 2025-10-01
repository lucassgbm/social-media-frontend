import type { NextConfig } from "next";
const url = "http://localhost:8080/public/storage/";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(url + '**')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
