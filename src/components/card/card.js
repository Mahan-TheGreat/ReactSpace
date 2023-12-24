import React from "react";
import "./card.css";
import PrimaryButton from "../button/button";

function Card() {
  return (
    <>
      <div className="def-card card">
        <h2 className="">Title </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <PrimaryButton innerText="Button"></PrimaryButton>
      </div>
    </>
  );
}

export default Card;
