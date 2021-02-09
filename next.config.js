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
    plugins: [
        optimizedImages(),
        [
            '@fullhuman/postcss-purgecss',
            {
                content: [
                    './pages/**/*.{js,jsx,ts,tsx}',
                    './src/Components/**/*.{js,jsx,ts,tsx}'
                ],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            }
        ],
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
