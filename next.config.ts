import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // domains: ["techcrunch.com", "i.abcnewsfe.com", "s.abcnews.com", "premium.vgc.no", "www.aftenposten.no", "www.aftenposten.no"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      }
    ]
  }
};

export default nextConfig;

