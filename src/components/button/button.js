import React from "react";
import "./button.css";

function PrimaryButton({ innerText, className, showIcon, iconSource }) {
  return (
    <button type="button" className={`primary-btn  ${className}`}>
      {innerText}
      {showIcon && (
        <img src={iconSource} className="media-button" alt="button icon" />
      )}
    </button>
  );
}

export default PrimaryButton;
