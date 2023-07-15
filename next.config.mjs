import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
      },
    };
    return config;
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  reactStrictMode: true,
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    },
    async redirects() {
        return [
          {
            source: '/facebook',
            destination: 'https://www.facebook.com/josuX00/',
            permanent: false,
            basePath: false
          },
          {
            source: '/instagram',
            destination: 'https://www.instagram.com/lazyjosu/',
            permanent: false,
            basePath: false
          },
          {
            source: '/linkedin',
            destination: 'https://www.linkedin.com/in/josu00/',
            permanent: false,
            basePath: false
          },
          {
            source: '/github',
            destination: 'https://github.com/JosuX',
            permanent: false,
            basePath: false
          },
        ]
      },
  }

  
export default million.next(nextConfig);

