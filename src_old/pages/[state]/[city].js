import Link from "next/link"

import {getBySlug} from "../../lib/api/remote";
import Layout from "../../components/Layout";
import {wrapper} from "../../lib/state/store";
import {connect} from "react-redux";
import {setOriginSync} from "../../lib/state/actions/city";
import {bindActionCreators} from "redux";
import Box1 from "../../components/box1/Box1";
import {HomeFillIcon} from "@primer/octicons-react";
import React from "react";


const City = ({city,origin}) =>{


    let state = {};



    return (
        <Layout>


            <div className="grid container-lg">
                <div className="grid__item a">
                    <div className="d-flex flex-column flex-lg-row">
                        <Box1>
                            <HomeFillIcon size={48}></HomeFillIcon>
                            <h3 className="mb-1">Buslinien aller Städte</h3>
                            <p>
                                Haltestellen-Buslinien.de zeigt dir (fast) alle Buslinien in nahezu allen Städten Deutschlands.
                                Ein Klick auf die jeweilgen Buslinien öffnet den Streckenverlauf. Selbstverständlich kannst du
                                komfortabel nach deiner Busverbindung suchen!
                            </p>
                        </Box1>
                        <Box1>
                            <HomeFillIcon size={48}></HomeFillIcon>
                            <h3 className="mb-1">Buslinien aller Städte</h3>
                            <p>
                                Haltestellen-Buslinien.de zeigt dir (fast) alle Buslinien in nahezu allen Städten Deutschlands.
                                Ein Klick auf die jeweilgen Buslinien öffnet den Streckenverlauf. Selbstverständlich kannst du
                                komfortabel nach deiner Busverbindung suchen!
                            </p>
                        </Box1>
                        <Box1>
                            <HomeFillIcon size={48}></HomeFillIcon>
                            <h3 className="mb-1">Buslinien aller Städte</h3>
                            <p>
                                Haltestellen-Buslinien.de zeigt dir (fast) alle Buslinien in nahezu allen Städten Deutschlands.
                                Ein Klick auf die jeweilgen Buslinien öffnet den Streckenverlauf. Selbstverständlich kannst du
                                komfortabel nach deiner Busverbindung suchen!
                            </p>
                        </Box1>
                    </div>
                </div>
                <div className="grid__item b">
                    right
                </div>
                <div className="grid__item c">
                    test?
                </div>
            </div>


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

        await store.dispatch(setOriginSync(data.data));


    }
);
const mapStateToProps = state => {
    return {
        modal:state.modal,
        origin:state.city.origin
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        setOriginSync: bindActionCreators(setOriginSync, dispatch),
        setOrigin: setOriginSync,
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(City);