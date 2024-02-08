import nextMDX from '@next/mdx';

const withMDX = nextMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
