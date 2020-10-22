import React from "react";
import '../styles/Sidebar.css'
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <Menu isOpen={ true } className="sidebar">
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/sponsorship">
        Sponsor
      </Link>
      <Link className="menu-item" to="/about">
        About
      </Link>
      <Link className="menu-item" to="/gallery">
        Gallery
      </Link>
    </Menu>
  );
};

export default Sidebar;
