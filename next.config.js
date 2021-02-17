/* const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
}); */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: false,
})

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports =   {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    images: {
        domains: [
            'a.storyblok.com'
        ],
    },
    plugins: [
        optimizedImages(),
        'postcss-preset-env'
    ]
}

/*
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
*/
