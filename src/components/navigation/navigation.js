import React from "react";
import "./navigation.css";
import NavigationLogo from "./logo/logo";
import PrimaryButton from "../button/button";

const Navigation = ({ innerText, onClickFunction }) => {
  return (
    <div id="navigation">
      <NavigationLogo></NavigationLogo>
      <ul id="nav_menu">
        <li className="active">Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Services</li>
        <PrimaryButton innerText="Hire Us" className="nav_btn"></PrimaryButton>
        {/* <button id="nav_btn">Hire Us</button> */}
      </ul>
    </div>
  );
};

export default Navigation;
