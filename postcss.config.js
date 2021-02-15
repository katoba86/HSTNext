module.exports = {
    plugins: ["autoprefixer",
        [
            '@fullhuman/postcss-purgecss',
            {
                content: [
                    './pages/**/*.{js,jsx,ts,tsx}',
                    './src/Components/**/*.{js,jsx,ts,tsx}'
                ],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                safelist: ["html", "body"]
            }
        ],
]

};
