/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  turbopack: {
    root: import.meta.dirname,
  },
}

export default nextConfig
