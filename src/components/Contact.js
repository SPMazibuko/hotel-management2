import React from "react";
import phone from '../resources/phone.jpg';
import { Button } from "@material-ui/core";
import './Contact.css'
import Footer from "./Footer";

function Contact(){
    return(
      <>
          <div className="contact">
            <h1 style={{color:'#FFF', fontSize:'60px',fontWeight:'800' ,paddingTop:'100px', textAlign:'center'}}>
              Contact Us.
            </h1>
            <h3 style={{color:'#FDF7F7', fontSize:'36px'}}>Let Us Help You Plan Your Next Trip.</h3>
        </div>
{/*About*/}
        <div className="contact__form">
          <div style={{textAlign:"start", width:"50%", padding:"40px"}}>
              <h2 style={{color:"#484747", fontSize:"36px"}}>Contact Form</h2>
              <p  style={{color:"#484747", fontSize:"23px"}}>
              <form className='form-group' autoComplete="off">
                <label>Name:</label>
                <br/>
                <input type="text" className="inputs" required ></input>
              <br></br>
              <label>Phone:</label>
              <br/>
              <input type="phone" className="inputs" required ></input>
              <br></br>
              <label>Email</label>
              <br/>
              <input type="email" className="inputs" required ></input>
              <br></br>
              <label>Your Message</label>
              <br/>
              <textarea row="12" className='inputs' required />
              <br />
              <div className='btn-box'>
              <Button type="submit" color="primary" variant="contained" size="large" >Send Message</Button>
              </div>
          </form>
              </p>
          </div>
          <div className="pictures" style={{padding:"40px"}}>
            <img src={phone} alt="Cleaners Making Bed" width="300px" height="300px" style={{marginTop:"40px"}}/>
            <p style={{fontWeight:"700", fontSize:"20px"}}>
            Contact us regarding our services or <br/>enquiries
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Contact;