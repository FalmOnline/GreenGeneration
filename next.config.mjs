/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'greengeneration.falm.ro',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
