import nextMDX from '@next/mdx';

const withMDX = nextMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: "/experiments/(.*)",
      headers: [
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin',
        },
        {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
        }
      ]
    },
  ],
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
