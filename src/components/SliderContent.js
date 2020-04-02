import React from "react";

const SliderContent = () => (
  <div
    style={{
      transform: `translateX(-${props => props.translate}px)`,
      transition: `transform ease-out ${props => props.transition}s`,
      height: "100%",
      width: `${props => props.width}px`,
      display: "flex"
    }}
  ></div>
);

export default SliderContent;
