import {City} from "../type";

export interface ProcessEnv {
    [key: string]: string | undefined
}

interface FetchedData<T> {
    data:T;
    status:number;
    success:boolean;
}

function extract<T>(arg:FetchedData<T>){
    return arg.data;
}

export const fetchHome = () => {
    return fetch("https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=DwWjxHhKMoAJ1jlm9ZuYLAtt");
}
export const getBySlug = async (state:string,city:string) => {
    const data = await fetch(`${process.env.API_HOST}/city/byName/${state}/${city}`);
    const json = await data.json();
    return extract<City>(json as FetchedData<City>);
};
