// @ts-check

import { env } from "./src/env/index.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath:
      process.env.NODE_ENV === "development"
        ? "tsconfig.dev.json"
        : "tsconfig.json",
  },
};

export default nextConfig;
