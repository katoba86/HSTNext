import React from "react";
import Layout from "@Components/Layout";

import cities from '../../data/loc_cities.json';
import {GetStaticPaths, GetStaticProps, NextPageContext} from "next";
import {City} from "../../src/type";
import {getBySlug} from "@Api";



interface CityPageProps {
    city:City;
}


const CityPage = ({city}:CityPageProps) => {
    return (
      <Layout>
          <div className="pt-lg-5">Halllo????

          <pre>
              {JSON.stringify(city)}
          </pre>
          </div>
      </Layout>
    );
}


interface Context extends NextPageContext{
    query:{
        state:string;
        city:string;
    }
}
type IPageUrl = {
    city: string;
    state: string;
};
export type ICityProps = {
    city: City;
};

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {


    return {
        paths: cities.map((city) => {
            return {
                params: {
                    city: city.urlname,
                    state: 'nrw'
                }
            }
        }),
        fallback: true,
    };
};




export const getStaticProps:GetStaticProps<ICityProps,IPageUrl> = async ({params}) => {
    const res = await getBySlug('nrw',params!.city);
    const data = await res.json();

    return {
        props:{
            city:data as City
        },

    }

};


export default CityPage;
