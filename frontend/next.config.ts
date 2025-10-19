import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;