import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required with multiple root layouts ((en) / (no)): there is no single root
  // layout to compose a 404 from, so a global-not-found page handles unmatched URLs.
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
