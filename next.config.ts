import type { NextConfig } from "next";
const url = process.env.NEXT_PUBLIC_STORAGE_API || "CHANGEURL/public/storage/";
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
