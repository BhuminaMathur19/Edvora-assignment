import Hero from '../components/hero'
import Footer from '../components/footer'
import RankPredictor from '../components/rankPredictor';
const Home=()=>{
    return(
       <div className="home">
       <h1>Edvora</h1>
       <h2>Products</h2>
         <Hero/>
         <RankPredictor/>
         <Footer/>
       </div>
    )
}

export default Home;