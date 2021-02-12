import Storyblok, {StoryblokConfig, StoryblokResult} from "storyblok-js-client";

export class StoryblokService{

    private static instance:StoryblokService|null = null;

    private client:Storyblok;

    private constructor() {

        const config:StoryblokConfig = {
            accessToken:process.env["STORY_TOKEN"],
        }

        this.client = new Storyblok(config);
    }

    static getInstance():StoryblokService{
        if(StoryblokService.instance===null){
            StoryblokService.instance = new StoryblokService();
        }
        return StoryblokService.instance;
    }


    async getPage(slug:string){
        //await this.client.cacheProvider().flush();
        const res:StoryblokResult =  await this.client.get('cdn/stories/'+slug);
        return res.data.story.content;
    }


}
