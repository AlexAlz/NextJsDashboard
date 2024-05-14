// next.config.js
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Solo reemplaza 'fs' si no está en el lado del servidor
        config.resolve.fallback = { fs: false };
      }
      return config;
    },
  };
  
export default nextConfig;
