import type { NextConfig } from "next";

const isStaticSubdirectoryBuild =
  process.env.STATIC_SUBDIRECTORY_BUILD === "1";

const nextConfig: NextConfig = {
  // Keep local development and the existing server deployments at the site
  // root. The dedicated export command opts into the WordPress subdirectory.
  ...(isStaticSubdirectoryBuild
    ? {
        trailingSlash: true,
        output: "export",
      }
    : {}),
};

export default nextConfig;
