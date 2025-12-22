/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/bheem-portfolio",
  assetPrefix: "/bheem-portfolio/",
};

module.exports = nextConfig;
