/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/booklore',
  assetPrefix: '/booklore',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
