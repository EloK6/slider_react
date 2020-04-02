import React from "react";
import leftArrow from "../img/left-arrow.svg";

const ArrowLeft = ({ handleClick }) => (
  <div onClick={handleClick} className="ArrowLeft">
    <img src={leftArrow} />
  </div>
);

export default ArrowLeft;
