import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ["zcxwrk-3000.csb.app"],
  },
};

export default config;
