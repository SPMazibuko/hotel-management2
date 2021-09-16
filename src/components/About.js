import React from "react";
import bed from '../resources/bed.jpg';
import serve from '../resources/serve.jpg';
import view from '../resources/view.jpg';
import './About.css'
import Footer from "./Footer";

function About(){
    return(
      <>
          <div className="about">
            <h1 style={{color:'#FFF', fontSize:'60px',fontWeight:'800' ,paddingTop:'100px', textAlign:'center'}}>
              About Hotel Management.
            </h1>
            <h3 style={{color:'#FDF7F7', fontSize:'36px'}}>Let Us Help You Plan Your Next Trip.</h3>
        </div>
{/*About*/}
        <div className="more__about">
          <div style={{textAlign:"start", maxWidth:"30%", padding:"40px"}}>
              <h2 style={{color:"#484747", fontSize:"36px"}}>Our Story</h2>
              <p  style={{color:"#484747", fontSize:"23px"}}>
              We are growing company established in 2021 September. The company was established with the aim to change lives by providing an easy solution for the travelers.
              </p>
          </div>
          <div className="pictures" style={{padding:"40px"}}>
            <img src={serve} alt="Cleaners Making Bed" width="250px" height="250px"style={{zIndex:"2", position: 'absolute',marginTop:"30px", marginLeft:"90px"}}/>
            <img src={view} alt="Cleaners Making Bed" width="200px" height="200px" style={{zIndex:"3", position: 'absolute',marginTop:"200px", marginLeft:"300px"}}/>
            <img src={bed} alt="Cleaners Making Bed" width="280px" height="280px" style={{zIndex:"1", marginLeft:"300px"}}/>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default About;