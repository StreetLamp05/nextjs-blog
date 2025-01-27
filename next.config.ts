/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables `next export`
    images: {
        unoptimized: true, // Since GitHub Pages doesn’t support Next.js Image Optimization
    },
    assetPrefix: "./", // Ensures relative asset paths work correctly
    trailingSlash: true, // Fixes potential 404 errors for internal routing
};

module.exports = nextConfig;
