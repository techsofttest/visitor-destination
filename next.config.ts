import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/upload/**",
      },
      {
        protocol: "https",
        hostname: "techsoftwebsolutions.com",
        pathname: "/techsoft/demo/visitor/public/upload/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;