import React from "react";
import Slider from "react-slick";
import "./NewsSlider.css";
import {sliderConfig} from "../../constants/sliderConfig";

export const NewsSlider = ({ children, config}) => {
  const settings = {
    ...sliderConfig,
    ...config
  };

  return (
      <Slider {...settings}>
        { children }
      </Slider>
  )
}