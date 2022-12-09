import React from "react";

import "./footer.scss";
import bg from './l.jpg';


const Footer = () => {
  return (
    <footer
      className="footer bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="footerInfo">
          <div className="footerDetails">
            <h1>Services</h1>
            <a href="#home">
              <p>Delivery</p>
            </a>
            <a href="#menu">
              <p>Pricing</p>
            </a>
          </div>
          <div className="footerDetails">
            <h1>Information</h1>
            <a href="#contact">
              <p>Contact us</p>
            </a>
            <a href="#home">
              <p>Terms of services</p>
            </a>
          </div>
          <div className="footerDetails" >  <iframe title="our location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.0843608868213!2d51.416182614531635!3d35.77330403252567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06884f217c6f%3A0x23f52b0f0264f32e!2sSnappfood!5e0!3m2!1sen!2s!4v1670574258072!5m2!1sen!2s"></iframe>
          
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.0843608868213!2d51.416182614531635!3d35.77330403252567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06884f217c6f%3A0x23f52b0f0264f32e!2sSnappfood!5e0!3m2!1sen!2s!4v1670574258072!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;



