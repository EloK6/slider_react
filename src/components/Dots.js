import React from "react";

const Dot = ({ active }) => (
  <span
    style={{
      padding: "10px",
      marginRight: "5px",
      borderRadius: "50%",
      background: `${active ? "black" : "white"}`
    }}
  />
);

const Dots = ({ slides, activeIndex }) => (
  <div className="Dots">
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
);

export default Dots;
