import React from "react";
import logo from "../images/swts.jpg";
import "../styles/Header.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__topLeft">
        <img src={logo} alt="shoot with the stars logo" />
      </div>
      <div className="header__bottom">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/sponsorship">
            Sponsorship &<br></br> Registration
          </Link>
          <a href="">About</a>
          <a href="">Gallery</a>
        </nav>
      </div>
      <div className="header__topRight">
        <Button
          size="large"
          style={{
            backgroundColor: "#426744",
            height: 60,
            width: 180,
            fontWeight: 400,
            fontSize: "1.3rem",
            color: "white",
          }}
          href=""
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default Header;
