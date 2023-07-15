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

