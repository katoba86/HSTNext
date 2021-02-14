export interface ProcessEnv {
    [key: string]: string | undefined
}
export const fetchHome = () => {
    return fetch("https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=DwWjxHhKMoAJ1jlm9ZuYLAtt");
}
export const getAllCities = () => fetch(`${process.env.API_HOST}/city/all/1`);
export const getBySlug = (state:string,city:string) => fetch(`${process.env.API_HOST}/city/byName/${state}/${city}`);
