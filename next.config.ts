import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    console.log('API_URL:', process.env.COMPONENTS_API_URL);
    return [
      {
        source: '/componentsApi/:path*',
        destination: process.env.COMPONENTS_API_URL + '/:path*',
      },
    ];
  },
};

export default nextConfig;
