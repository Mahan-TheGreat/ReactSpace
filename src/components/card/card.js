import React from "react";
import "./card.css";
import PrimaryButton from "../button/button";
import CardImage from "../../logo.svg";

function Card() {
  return (
    <>
      <div className="def-card card">
        <img class="card-img-top" src={CardImage} alt="" />
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
