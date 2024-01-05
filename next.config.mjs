// @ts-check

import { env } from "./src/env/index.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
