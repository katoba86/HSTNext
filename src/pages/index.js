import {useStore} from "../lib/context/store";
import {changeName, setOrigin} from "../lib/context/reducer";
import Intro from "../components/intro/Intro";
import Form from "../components/form/Form";
import Layout from "../components/Layout";


const Home = () => {


    const [state,dispatch] = useStore();



    const test = () => {


        dispatch(setOrigin({
            name:'Hamm',
            id:4191
        }));
    };

    return (
     <Layout>
           test {JSON.stringify(state)}
           <hr/>
           <button onClick={test}>Test</button>
      </Layout>
    );


};



export default Home;
