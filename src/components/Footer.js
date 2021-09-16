import React from 'react';
import './Footer.css'

function Footer(){
    return(
        <div className="footerarea">                    
            <div className="footerarea__links">
                               
                <div className="footerarea__linkarea">
                    <span style={{fontWeight:'800'}}>Phone Support</span>
                    <p>24/7 Call Us Now</p>
                    <p>073 682 5516</p>
                    <p>068 028 7251</p>
                </div>
                <div className="footerarea__linkarea">
                    <span style={{fontWeight:'800'}}>Connect With Us</span>
                    <p>Follow us on social media</p>
                    <p><a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-instagram"></a>
                    </p>
                </div>
                <div className="footerarea__linkarea">
                    <span style={{fontWeight:'800'}}>Location</span>
                    <p>153 Troye street</p>
                    <p>Sunnyside, Pretoria</p>
                    <p>0002.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;