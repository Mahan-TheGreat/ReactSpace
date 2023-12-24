import React from "react";
import "./button.css";

const PrimaryButton = ({ innerText }) => {
  return (
    <button type="button" className="button btn btn-sm btn-primary">
      {innerText}
    </button>
  );
};

export default PrimaryButton;
