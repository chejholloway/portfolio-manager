import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  typescript: {
    ignoreBuildErrors: true,
  },
}

const millionConfig = {
  auto: true,
};

export default million.next(nextConfig, millionConfig);