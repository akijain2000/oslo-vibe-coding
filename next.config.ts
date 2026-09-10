import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required with multiple root layouts ((en) / (no)): there is no single root
  // layout to compose a 404 from, so a global-not-found page handles unmatched URLs.
  experimental: {
    globalNotFound: true,
  },
  // Static starter kit for the "build your first agent" session lives in public/agent.
  // Next does not serve a folder index from public, so /agent shows its index.html.
  async rewrites() {
    return [{ source: "/agent", destination: "/agent/index.html" }];
  },
};

export default nextConfig;
