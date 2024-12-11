

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "unsplash.com",
      "images.unsplash.com", 
      "hebbkx1anhila5yf.public.blob.vercel-storage.com", 
    ],
  },
};

export default nextConfig;
