import React from "react";
import "./logo.css";
import logo from "../../../assets/nav_logo.PNG";

const NavigationLogo = ({ innerText, onClickFunction }) => {
  return (
    <div id="navigation_logo">
      <img id="navigation_logo_img" src={logo} alt="logo" />
      <h6>creativeAgent</h6>
    </div>
  );
};

export default NavigationLogo;
