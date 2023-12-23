import React from "react";
import "./card.css";
import PrimaryButton from "../button/button";

function Card() {
  return (
    <>
      <div className="def-card">
        <p>THis is Card </p>
        <PrimaryButton innerText="Button"></PrimaryButton>
      </div>
    </>
  );
}

export default Card;
