import type { NextConfig } from "next";
const url = "http://ip172-18-0-5-d3ej49291nsg00e4q000-80.direct.labs.play-with-docker.com/public/storage/";
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
