import React from "react";
import "./button.css";
import frame from "../../assets/frame.png";

function PrimaryButton({ innerText, className, showIcon }) {
  return (
    <button type="button" className={`primary-btn  ${className}`}>
      {innerText}
      {showIcon && (
        <img src={frame} className="media-button" alt="button icon" />
      )}
    </button>
  );
}

export default PrimaryButton;
