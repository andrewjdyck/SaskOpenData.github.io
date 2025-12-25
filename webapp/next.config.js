const nextConfig = {
  reactStrictMode: true,
  // Next handles SWC minification and eslint separately in newer versions —
  // removed deprecated keys (`swcMinify`, `eslint`, and empty `experimental`).
  // `output: 'export'` disables the Image Optimization API. For local dev while
  // keeping static export behavior, disable image optimization to avoid errors
  // from `next/image` by setting `images.unoptimized: true`.
  output: 'export', // For static export, if needed
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;