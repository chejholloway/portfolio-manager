import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
}

const millionConfig = {
  auto: true,
};

export default million.next(nextConfig, millionConfig);