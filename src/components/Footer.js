import React from "react";
import "../styles/Footer.css";
import logo from "../images/swts.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <img src={logo} alt="shoot with the stars logo" />
        </div>
        <div className="footer__middle">
          <h3>Contact Us</h3>
          <p>(727) 521-5315</p>
          <p>info@pinellaspal.com</p>
        </div>
        <div className="footer__right">
          <h3>Address</h3>
          <p>3755 46th Ave. N.</p>
          <p>St. Petersburg, Florida 33714</p>
        </div>
      </div>
      <div>
          <p className='copyright'>Copyright © 2020 Pinellas Pal. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
