declare namespace Process {
    interface ProcessEnv {
        PROXY_MODE: string;
        NEXT_PUBLIC_STATIC_PATH: string;
        NEXT_PUBLIC_API_URL: string;
        NEXT_PUBLIC_API_KEY: string;
        STORY_TOKEN:string;
        API_HOST:string;
    }
}

declare namespace jest {
    interface Options {
        media?: string;
        modifier?: string;
        supports?: string;
    }

    interface Matchers<R> {
        toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
}
