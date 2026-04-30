import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-i18next", "i18next"],
  output: "standalone",
};

export default nextConfig;
