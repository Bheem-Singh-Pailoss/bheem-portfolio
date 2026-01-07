import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true" || isProduction;

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/bheem-portfolio" : "",
  assetPrefix: isGitHubPages ? "/bheem-portfolio/" : "",
  trailingSlash: false,
};

export default nextConfig;
