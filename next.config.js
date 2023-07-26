/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.api-sports.io',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      }
    ],
  },
}

module.exports = nextConfig
