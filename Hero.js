import Logo from '../assets/logo.svg'
const Hero=()=>{
    return(
       <div className="hero">
          <div className="navbar">
            <div className="logo"><img src={Logo}/></div>
            <div className="links">
          </div>
          </div>
          <div className="hero-disc">
          <div className="rectangle1"></div>
          <div className="heading"><h1>Brandname = Apple</h1>
          <h2>Location = USA</h2>
          <h3>Date = 13/09/21</h3>
          </div>
           </div>
           <div className="rectangle2"></div>
           <div className="heading">
               <h1>Brandname = Samsung</h1>
               <h2>Location = China</h2>
               <h3>Date = 13/09/21</h3>
           </div>
           <div className="rectangle3"></div>
           <div className="heading">
               <h1>Brandname = Sony</h1>
               <h2>Location = Japan</h2>
               <h3>Date = 13/09/21</h3>  
            </div>
            <div className="rectangle4"></div>
            <div className="heading">
                <h1>Brandname = Toshiba</h1>
                <h2>Location = Taiwan</h2>
                <h3>Date = 13/09/21</h3>
            </div>
            </div>
    )
}

export default Hero;