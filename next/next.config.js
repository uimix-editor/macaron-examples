/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.macaron/,
      use: [options.defaultLoaders.babel, "@macaron-elements/loader-webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
