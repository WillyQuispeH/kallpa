/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY || "957902342",
    API_URL: process.env.API_URL || "https://api-kallpa.onrender.com",
  },
};

module.exports = nextConfig;
