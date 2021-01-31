import {AppContext} from "../lib/context/AppContext";
import {useContext} from "react";
import {ArrowSwitchIcon, ClockIcon, FilterIcon, HomeFillIcon, HomeIcon, MilestoneIcon} from "@primer/octicons-react";
import Box1 from "../components/box1/Box1";
import Radio from "../components/radio/Radio";

const Home = () => {


    const {user,storeUser} = useContext(AppContext);

    return (
     <>



        <div className="appWrapper">
        <header>

            <div>
                <div className="d-sm-none d-lg-flex flex-lg-column  p-lg-5 col-6">
                    <h1>Erhalte deinen Fahrplan!<br/>
                        Deine Haltestellen</h1>
                    <p className="pt-3">Egal wo du bist, egal wohin du möchtest. Wir finden die passende Haltestelle bzw. Buslinie für dich! In über 3 Millionen Verkehrsverbindungen wird auch deine sicherlich dabei sein!</p>
                </div>
            </div>
            <div>
                <h1 className="d-md-none">Haltestellen</h1>


                <form>

                    <div className="Box position-relative">
                        <div className="Box-row d-flex flex-items-center">
                            <HomeIcon size={24} />
                            <div className="flex-auto">Von</div>
                        </div>
                        <button className="toggle"><ArrowSwitchIcon size={24}/></button>
                        <div className="Box-row d-flex flex-items-center">
                            <MilestoneIcon size={24} />
                            <div className="flex-auto">Nach</div>
                        </div>

                         <div className="Box-row d-flex flex-items-center">
                        <ClockIcon size={24} />
                        <div className="flex-auto">Wann</div>
                        </div>
                        <button className="btn btn-default mb-sm-4 bg-warning mt-sm-2 mt-lg-0 mb-lg-0 float-right">
                        Suchen
                    </button>
                    </div>


                </form>
            </div>
        </header>


          <main className="mt-6">
              <div className="d-flex flex-column flex-md-row">
             <Box1 image="/images/svg/business-crossroad.svg" headline="Buslinien aller Städte"/>
             <Box1 image="/images/svg/business-crossroad.svg" headline="Buslinien aller Städte"/>
             <Box1 image="/images/svg/business-crossroad.svg" headline="Buslinien aller Städte"/>
              </div>

          </main>












            <div style={{display:'none'}}>
          <h1>Hello? {user.name}</h1>
          <button onClick={()=>{storeUser({name:'Kai'})}}>Test</button>
            </div>
         </div>
      </>
    );


};
export default Home;