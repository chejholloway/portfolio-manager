import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: { unoptimized: true },
  reactStrictMode: false,
  // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  }
}

const millionConfig = {
  auto: true,
};

export default million.next(nextConfig, millionConfig);