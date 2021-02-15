import React from "react";
import Layout from "@Components/Layout";

import cities from '../../data/loc_cities.json';
import {GetStaticPaths, GetStaticProps, NextPageContext} from "next";
import {City, GermanState} from "../../src/type";
import {getBySlug} from "@Api";
import Box from "@Components/Box";
import Grid from "@Components/Grid";
import {cityText1} from "@Services/TextServer";
import {GERMAN_STATES, getStateSlug} from "@Services/CityService";



interface CityPageProps {
    city:City;
}


const CityPage = ({city}:CityPageProps) => {
    return (
      <Layout>
         <Grid>
             <Grid.Top>
                 <Box>
                     <Box.Title>Busfahrplan {city.name}</Box.Title>
                     <Box.Content>
                         <p>
                             { cityText1(city)}
                         </p>
                     </Box.Content>
                 </Box>
                 <Box>
                     <Box.Title>Busfahrplan {city.name}</Box.Title>
                     <Box.Content>
                         <p>
                             { cityText1(city)}
                         </p>
                     </Box.Content>
                 </Box>
             </Grid.Top>
         </Grid>
      </Layout>
    );
}



type IPageUrl = {
    city: string;
    state: string;
};
export type ICityProps = {
    city: City;
    state:GermanState;
};

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {

    return {
        paths: cities.map((city) => {
            return {
                params: {
                    city: city.urlname,
                    state: getStateSlug(city.bundesland.bundesland_id)
                }
            }
        }),
        fallback: 'blocking',
    };
};




export const getStaticProps:GetStaticProps<ICityProps,IPageUrl> = async ({params}) => {
    console.log("test");
    const data = await getBySlug(params!.state,params!.city);
        console.log(data);
    return {
        props:{
            city:data,
            state: GERMAN_STATES[data.bundesland.bundesland_id+1]
        },

    }

};


export default CityPage;
