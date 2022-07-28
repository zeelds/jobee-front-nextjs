/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  ignoreBuildErrors: true,
  reactStrictMode: true,
}

module.exports = nextConfig
