/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizePackageImports: ["lucide-react", "framer-motion", "@paper-design/shaders"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
