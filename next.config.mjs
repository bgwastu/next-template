/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: process.env.SKIP_LINTER === "true",
  },
  typescript: {
    ignoreBuildErrors: process.env.SKIP_LINTER === "true",
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default nextConfig;
