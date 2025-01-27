/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    assetPrefix: "/nextjs-blog/",
    trailingSlash: true,
};

module.exports = nextConfig;
