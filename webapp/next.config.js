const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {}, // Remove invalid keys if not using specific experimental features
  output: 'export', // For static export, if needed
  eslint: {
    ignoreDuringBuilds: false, // Ensure builds fail on ESLint errors
  },
};

module.exports = nextConfig;