/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedForwardedHosts: [
        "localhost:3000",
        "refactored-waffle-69gvw7j59v6w25g9p-3000.app.github.dev",
      ],
      allowedOrigins: [
        "localhost:3000",
        "refactored-waffle-69gvw7j59v6w25g9p-3000.app.github.dev",
      ],
    },
  },
};

export default nextConfig;
