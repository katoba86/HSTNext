"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBySlug = exports.fetchHome = void 0;
function extract(arg) {
    return arg.data;
}
exports.fetchHome = () => {
    return fetch("https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=DwWjxHhKMoAJ1jlm9ZuYLAtt");
};
exports.getBySlug = async (state, city) => {
    const data = await fetch(`${process.env.API_HOST}/city/byName/${state}/${city}`);
    const json = await data.json();
    return extract(json);
};
