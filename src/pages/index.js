import Layout from "../components/Layout";
import {connect} from "react-redux";
import {setOrigin} from "../lib/state/actions";

const Home = ({setOrigin}) => {


    const test = () => {


        setOrigin({
            name:'Doermund',
            id:4191
        });
    };

    return (
     <Layout>
           <hr/>
           <button onClick={test}>Test</button>
      </Layout>
    );


};



const mapDispatchToProps = dispatch => {
    return {
        setOrigin: (toWhere) => dispatch(setOrigin(toWhere))
    }
};

export default connect(null,mapDispatchToProps)(Home);

