/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ostiamarari.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ostiamarari.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig