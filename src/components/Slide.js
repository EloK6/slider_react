import React from "react";

const Slide = ({ content }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      backgroundImage: `url('${content}')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}
  ></div>
);

export default Slide;
