const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */

const devConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: "",
  // assetPrefix: "",
  images: {
    unoptimized: true,
  },
};

const prodConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/sumdynamics",
  assetPrefix: "/sumdynamics",
};

const nextConfig = {
  ...(isProd ? prodConfig : devConfig),
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: isProd
      ? prodConfig.assetPrefix
      : devConfig.assetPrefix,
  },
};

export default nextConfig;
