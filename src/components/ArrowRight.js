import React from "react";
import rightArrow from "../img/right-arrow.svg";

const ArrowRight = ({ handleClick }) => (
  <div onClick={handleClick} className="ArrowRight">
    <img src={rightArrow} />
  </div>
);

export default ArrowRight;
