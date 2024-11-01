import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/assetsApi/:path*',
        destination: process.env.COMPONENTS_API_URL + '/:path*',
      },
    ];
  },
};

export default nextConfig;
