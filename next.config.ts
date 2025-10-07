import type { NextConfig } from "next";
const url = "http://ip172-18-0-35-d3imkei91nsg008p1cmg-80.direct.labs.play-with-docker.com/public/storage/";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(process.env.NEXT_PUBLIC_STORAGE_API + '**')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
