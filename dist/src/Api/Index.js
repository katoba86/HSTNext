"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBySlug = exports.getAllCities = exports.fetchHome = void 0;
exports.fetchHome = () => {
    return fetch("https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=DwWjxHhKMoAJ1jlm9ZuYLAtt");
};
exports.getAllCities = () => fetch(`${process.env.API_HOST}/city/all/1`);
exports.getBySlug = (state, city) => fetch(`${process.env.API_HOST}/city/byName/${state}/${city}`);
