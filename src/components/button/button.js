import React from "react";
import "./button.css";

const Button = ({ style, onClickFn, innerText }) => {
  return (
    <div>
      <button className="btn btn-primary" style={style} onClick={onClickFn}>
        {innerText}
      </button>
    </div>
  );
};

export default Button;
