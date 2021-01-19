import React from "react";
import "../CSS/Header.css";
import logo from "./../../Logo2.png";

const Header = () => {
  return (
    <div className="container">
      <div className="Header">
        <img alt="" src={logo} className="logo-item"></img>
        <span className="title">مهندسان</span>
      </div>
    </div>
  );
};

export default Header;
