/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    unoptimized: true,
    domains: ["cdn.sanity.io","via.placeholder.com"],
    contentSecurityPolicy: "default-src 'self'; script-src 'none';",
    // minimumCacheTTL: 6000,
    //deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
},
};

export default nextConfig;
