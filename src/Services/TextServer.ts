import {City} from "../type";
import pupa from "pupa";
import seedrandom from "seedrandom";



const replaceRand = (str:string,key:string|number|undefined):string =>{
    const regex = /<rand>(.*?)<\/rand>/g;
    return str.replace(regex,(rep:string,t1:string)=>{
        const ret = t1.split("|");
        let rnd = seedrandom(key+'');
        return ret[Math.floor(rnd() * ret.length)];
    });
}

export const cityText1 = (city:City):string => {


    const Text = "Das ist ein <rand>einfacher|blöder|anderer {name}</rand> Test in {name}";
    const replace = replaceRand(Text,city.identifer);
    return pupa(replace,city);
}

