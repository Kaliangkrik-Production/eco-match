/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "raw.githubusercontent.com",
      "cdn.discordapp.com",
      "lh5.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
