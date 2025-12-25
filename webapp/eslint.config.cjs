const nextConfig = require('eslint-config-next');

module.exports = [
  ...nextConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
];
