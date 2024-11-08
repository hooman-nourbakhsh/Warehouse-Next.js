/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    const paths = ["components", "configs", "constants", "hooks", "layouts", "pages", "providers", "router", "services", "utils"];

    paths.forEach((dir) => {
      config.resolve.alias[dir] = path.join(__dirname, dir);
    });

    return config;
  },
};

module.exports = nextConfig;
