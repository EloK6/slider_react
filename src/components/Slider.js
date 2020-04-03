import React, { useState, useEffect, useRef } from "react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";
import Dots from "./Dots";

const getWidth = () => window.innerWidth;

const Slider = props => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, activeIndex } = state;
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    if (props.autoPlay !== null) {
      const interval = setInterval(play, props.autoPlay * 1000);
      return () => clearInterval(interval);
    }
  }, [props.autoPlay]);

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    });
  };

  // console.log(props);
  return (
    <div className="Slider">
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide} content={slide} />
        ))}
      </SliderContent>

      {!props.autoPlay && (
        <>
          <ArrowRight handleClick={nextSlide} />
          <ArrowLeft handleClick={prevSlide} />
        </>
      )}

      <Dots slides={props.slides} activeIndex={activeIndex} />
    </div>
  );
};

Slider.defaultProps = {
  slides: [],
  autoPlay: null
};

export default Slider;
