import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // The parent folder still holds the old Vite app's package-lock.json, so Next
  // would otherwise infer the workspace root as `bredent/` and warn on every build.
  turbopack: {
    root: path.resolve(__dirname),
  },

  async redirects() {
    return [
      {
        /*
         * Resources and Partners are now one page. /partners is redirected
         * rather than deleted: it is a live, indexed URL with links pointing at
         * it, and a 404 would throw away both the visitors and the ranking it
         * has already earned. permanent (308) tells Google to move that credit
         * to /resources instead of treating this as a temporary detour.
         *
         * It lands on the partner half of the page, not the top of it, so
         * someone who followed a link about partners still arrives at partners.
         */
        source: '/partners',
        destination: '/resources#network',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
