import Link from "next/link"

import {getBySlug} from "../../lib/api/remote";
import Layout from "../../components/Layout";
import {Component} from "react";
import {wrapper} from "../../lib/state/store";
import {connect} from "react-redux";
import {setOrigin} from "../../lib/state/actions";
import {setOriginSync} from "../../lib/state/actions/city";
import {bindActionCreators} from "redux";


const City = ({city}) =>{


    let state = {};



    return (
        <Layout>

            { JSON.stringify(city)}
            <Link href="/">
                <a>Back from City to home</a>
            </Link>
        </Layout>
    )
}
/* export async function getStaticPaths() {


    const res = await getAllCities();
    const cities = await res.json();

    const paths = cities.data.map((city) => ({
        params: {
            city:(city.urlname!=null && city.urlname.length>1)?city.urlname:city.name.toLowerCase().replace(' ','-').replace('ü','ue'),
            state:'nrw'
        },
    }));
    return { paths, fallback: false }
} */




export const getServerSideProps = wrapper.getServerSideProps(
    async ({params,store})=>{

        const res = await getBySlug(params.state,params.city);
        const data = await res.json();

        store.dispatch(setOriginSync(data.data));


    }
);


const mapDispatchToProps = (dispatch) => {
    return {
        setOriginSync: bindActionCreators(setOriginSync, dispatch),
    }
};


export default connect(null,mapDispatchToProps)(City);