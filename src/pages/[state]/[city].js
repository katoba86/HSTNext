import Link from "next/link"

import {getBySlug} from "../../lib/api/remote";
import Layout from "../../components/Layout";
import {Component} from "react";
import {Store, StoreProvider, useStore} from "../../lib/context/store";
import {setOrigin} from "../../lib/context/reducer";



const AuthenticateUser = (ComposedComponent) => {

    class Authenticate extends Component {



        render() {

            const pageProps = this.props;

            return (
                <div className="testMe">

                    <ComposedComponent {...pageProps}/>
                </div>
            );
        }
    }
    return Authenticate;
}

const City = ({city}) =>{


    let state = {};



    return (
        <Layout>

            {city.name}
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

//export async function getStaticProps({params}) {
export async function getServerSideProps({params}) {
    const res = await getBySlug(params.state,params.city);
    const data = await res.json()

    return {
        props: {
            city:data.data,
        },

        //revalidate: 1, // In seconds
    }
}

export default AuthenticateUser(City);