import React from "react";
import seedrandom from "seedrandom";
import pupa from "pupa";

interface RandomInterface{
    children:string;
    modifyBy:object;
}

export const Random = ({children,modifyBy}:RandomInterface) => {


    const replaceRand = (input:string,key:string|undefined|null = '') => {

        const regex2 = /\|(.*?)\|/g
        const regex = /#rand\$(.*?)\$/g;
        const test = input.replace(regex,(rep:string,t1:string)=>{
            const ret = t1.split("|");
            let rnd = seedrandom(key+'');
            return ret[Math.floor(rnd() * ret.length)];
        }).replace(
            regex2,'{$1}'
        );
        return pupa(test,modifyBy);
    }

    return (
        <>
            {replaceRand(children)}
        </>
    )
}
