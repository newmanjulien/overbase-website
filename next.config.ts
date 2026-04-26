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
  async redirects() {
    return [
      {
        source: "/challenges",
        destination: "/industries/insurance",
        permanent: true,
      },
      {
        source: "/challenges/unmet-demand",
        destination: "/industries/insurance",
        permanent: true,
      },
      {
        source: "/challenges/prioritize-needs",
        destination: "/industries/insurance",
        permanent: true,
      },
      {
        source: "/challenges/capability-awareness",
        destination: "/industries/consulting",
        permanent: true,
      },
      {
        source: "/challenges/capability-confidence",
        destination: "/industries/consulting",
        permanent: true,
      },
      {
        source: "/challenges/manager-visibility",
        destination: "/industries/law",
        permanent: true,
      },
      {
        source: "/challenges/executive-visibility",
        destination: "/industries/law",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default withMDX(nextConfig);
