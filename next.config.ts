import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ["zcxwrk-3000.csb.app"],
  },
};

export default config;
