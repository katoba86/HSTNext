import Storyblok, {StoryblokComponent, StoryblokConfig, StoryblokResult} from "storyblok-js-client";

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
        const result = res.data.story.content;
        if(result.hasOwnProperty('body')){
            result.body = result.body.map((item:StoryblokComponent<any>)=>{
                if(item.component==='Box2'){
                    console.log(item.Text.content);
                    item.renderedText = item.Text.content.map((c:any)=>"<p>"+this.client.richTextResolver.render(c)+"</p>").join("");
                }
                return item;
            });
        }

        return result;
    }


}
