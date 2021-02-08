/* const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
}); */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/stadt-:city([a-z]{3,})_:state([a-z]{3,})",
        destination: "/:state/:city",
      },
    ];
  },
};
