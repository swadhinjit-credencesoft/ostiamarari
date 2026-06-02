/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static export (out folder)

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