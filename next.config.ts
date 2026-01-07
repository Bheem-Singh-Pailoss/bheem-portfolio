/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/bheem-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/bheem-portfolio/" : "",
};

module.exports = nextConfig;
