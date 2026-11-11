/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  ...(isStaticExport ? { output: "export", assetPrefix: ".", images: { unoptimized: true } } : {}),
};

export default nextConfig;
