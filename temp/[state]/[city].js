import Link from "next/link"
import Head from "next/head"
import Layout from "../../src/components/layout"
import {getAllCities, getBySlug} from "../../src/lib/api/remote";

const City = ({city}) =>{
    return (
        <Layout>
            <Head>
                <title>City Test</title>
            </Head>
            <h1>{ city.name } fdfd</h1>


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
    console.log(data);
    return {
        props: {
            city:data.data,
        },

        //revalidate: 1, // In seconds
    }
}

export default City;