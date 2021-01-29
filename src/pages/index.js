import Head from 'next/head'
import Layout from '../components/layout'
import {connect} from "react-redux";

import {haveFun,setOrigin} from "../lib/state/actions/index";



const Home = ({name,origin,onHaveFun,onSetOrigin,username}) => {


  return (
      <Layout>
        <Head>
          <title>Index</title>
        </Head>
          <div className="p-medium">
          <h1>{name}</h1> <h2>Username:{ username }</h2>
      <p>
          {('name' in origin)?origin.name:'not set'}<br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, suscipit.
      </p>
              <button onClick={() => onHaveFun('Finn')}>Make a baby</button><br/><hr/>
              <button onClick={() => onSetOrigin('Hawaii')}>Einfach mal umziehen</button>
          </div>
      </Layout>
  )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/user`)
    const data = await res.json()
        console.log(data);
    // Pass data to the page via props
    return { props: { data } }
}


const mapStateToProps = state => {
  return {
      name:state.user.user,
      origin:state.city.origin
  }
};


const mapDispatchToProps = dispatch => {
  return {
      onHaveFun: (who) => dispatch(haveFun(who)),
      onSetOrigin: (toWhere) => dispatch(setOrigin(toWhere))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);