/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  // Note: redirects() doesn't work with output: "export"
  // For static exports, implement client-side redirects in the page components
  // or use server/CDN-level redirects
};

module.exports = nextConfig;
