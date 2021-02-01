
import Box1 from "../components/box1/Box1";


import {connect} from "react-redux";
import Intro from "../components/intro/Intro";
import Form from "../components/form/Form";



const Home = ({modal}) => {

    return (
     <>



        <div className="appWrapper">
        <header>
            <Intro/>
            <Form/>
        </header>


          <main className="mt-6">
              <div className="d-flex flex-column flex-md-row">
             <Box1 image="/images/svg/business-crossroad.svg" headline="Buslinien aller Städte"/>
             <Box1 image="/images/svg/business-crossroad.svg" headline="Buslinien aller Städte"/>
             <Box1 image="/images/svg/business-crossroad.svg" headline="Buslinien aller Städte"/>
              </div>
          </main>


            { JSON.stringify(modal)}


         </div>
      </>
    );


};


const mapStateToProps = state => {
    return {
        name:state.user.user,
        origin:state.city.origin,
        modal:state.user.modal
    }
};


const mapDispatchToProps = dispatch => {
    return {
        //onHaveFun: (who) => dispatch(haveFun(who)),
        //onSetOrigin: (toWhere) => dispatch(setOrigin(toWhere))
    }
};

export default connect(mapStateToProps,null)(Home);
