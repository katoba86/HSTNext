import {useStore} from "../lib/context/store";
import {changeName} from "../lib/context/reducer";


const Home = () => {


    const [state,dispatch] = useStore();



    const test = () => {
        dispatch(changeName("weil wegen...weil..."));
    };

    return (
     <>



        <div className="appWrapper">
       test {JSON.stringify(state)}
       <hr/>
       <button onClick={test}>Test</button>
         </div>
      </>
    );


};



export default Home;
