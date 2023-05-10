/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    protocol: "https",
    hostname: "res.cloudinary.com/**",
  },
};

module.exports = nextConfig;
