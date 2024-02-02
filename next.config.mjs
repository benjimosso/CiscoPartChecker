/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.it4trade.com',
            port: ''
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: ''
          },
            {
                protocol: 'https',
                hostname: 'www.tempestns.com',
                port: ''
            },
        ],
      },
};

export default nextConfig;
