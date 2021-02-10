module.exports = {
    plugins: [
        [
            "@fullhuman/postcss-purgecss",
            process.env.NODE_ENV === "production"
                ? {
                    // the paths to all template files
                    content: [
                        "./pages/**/*.{js,jsx,ts,tsx}",
                        "./src/Components/**/*.{js,jsx,ts,tsx}",
                    ],
                safelist: ["html", "body"],
                whitelist:['body'],
                    // function used to extract class names from the templates
                    defaultExtractor: (content) =>
                        content.match(/[\w-/:]+(?<!:)/g) || [],
                }
                : false,
        ],
    ],
};
