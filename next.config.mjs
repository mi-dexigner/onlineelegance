/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    formats:['image/avif','image/webp'],
    unoptimized: true,
    //domains: ["cdn.sanity.io","via.placeholder.com","fakestoreapi.com"],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '**'
            },{
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '**'
            },{
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '**'
            },
        ],
    contentSecurityPolicy: "default-src 'self'; script-src 'none';",
    minimumCacheTTL: 6000,
    //deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
},
};

export default nextConfig;
