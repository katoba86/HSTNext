
export interface GraphQuery{
    variables?:any;
    preview?:boolean;
}
export interface ProcessEnv {
    [key: string]: string | undefined
}
export const fetchHome = () => {

    return fetch("https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=DwWjxHhKMoAJ1jlm9ZuYLAtt");
}
