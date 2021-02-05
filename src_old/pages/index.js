import Link from 'next/link';

import Layout from "../components/Layout";
import {connect} from "react-redux";
import {setOrigin} from "../lib/state/actions";

const Home = ({setOrigin,origin}) => {


    const test = () => {


        setOrigin({
            name:'Doermund',
            id:4191
        });
    };

    return (
     <Layout>
         <main>
             test
         {JSON.stringify(origin)}
           <hr/>
           <button onClick={test}>Test</button>
             <Link href="/stadt-hamm_nrw"><a>test</a></Link>
         </main>
      </Layout>
    );


};

const mapStateToProps = state => {
    return {
        modal:state.modal,
        origin:state.city.origin
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setOrigin: (toWhere) => dispatch(setOrigin(toWhere))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);

