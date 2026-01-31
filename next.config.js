/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mapi.sadaivsatya.com',
        pathname: '/Media/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sadaivsatya.com', // 👈 added
        pathname: '/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/external/:path*',
        destination: 'https://mapi.sadaivsatya.com/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
