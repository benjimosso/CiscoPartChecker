/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'opqkqhhqloevwevuydcs.supabase.co',
              port: ''
            }
        ],
      },
};

export default nextConfig;
