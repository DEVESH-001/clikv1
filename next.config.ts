// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
  
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["unsplash.com"],
  },
};

export default nextConfig;