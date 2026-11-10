/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    // In dev mode on Windows, memory cache eliminates packfile corruption (.pack.gz ENOENT)
    if (dev) {
      config.cache = {
        type: "memory",
      };
    }
    return config;
  },
};

export default nextConfig;
