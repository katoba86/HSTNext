import Head from "next/head";
import { useState } from 'react'
import ClientOnlyPortal from '../components/ClientOnlyPortal'
import Test1 from '../components/Test1'
import Test2 from '../components/Test2'
import {connect} from "react-redux";



const Select = ({origin}) =>{

    const [open, setOpen] = useState(false);



    const test = (val) => {
      setOpen(val);
    };


    const components = {
        test1:Test1,
        test2:Test2
    };

    const Current = () => {
        console.log(open);
        const Tag = components['test'+open];
        return (<Tag/>);
    };

    return (
        <>
            <Head>
                <title>First Test</title>
            </Head>
          <div className="main">
              <header>
                  <div className="app">
                      <div className="finish">
                          <button  onClick={()=>{test(1)}} className="btn mr-2" type="button">Open 1</button>
                          <button  onClick={()=>{test(2)}} className="btn mr-2" type="button">Open 2</button>
                          <button  onClick={() => setOpen(false)} className="btn mr-2" type="button">Close</button>
                          <hr/>
                          { origin.name }
                      </div>
                  </div>

                  {open!==false && (
                      <ClientOnlyPortal selector="#modal">
                          <div className="modal">
                              <Current/>
                          </div>
                      </ClientOnlyPortal>
                  )}

              </header>
              <div id="modal"></div>
          </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        origin:state.city.origin
    }
};
export default connect(mapStateToProps)(Select);
