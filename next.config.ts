import type { NextConfig } from "next";
const url = "http://ip172-18-0-53-d3dt33q91nsg00e4onb0-80.direct.labs.play-with-docker.com/public/storage/";
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
