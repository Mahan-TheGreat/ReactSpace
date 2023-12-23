import React from "react";
import "./button.css";

const PrimaryButton = ({ innerText }) => {
  return (
    <div className="button-container ">
      <button type="button" className="btn btn-sm btn-outline-primary">
        {innerText}
      </button>
    </div>
  );
};

export default PrimaryButton;
