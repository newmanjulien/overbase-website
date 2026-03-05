import type { NextConfig } from "next";
import createMDX from "@next/mdx";
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // Use string plugin names for Turbopack compatibility.
    rehypePlugins: ["rehype-slug"],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "img.logokit.com",
      },
    ],
  },
};

export default withMDX(nextConfig);
