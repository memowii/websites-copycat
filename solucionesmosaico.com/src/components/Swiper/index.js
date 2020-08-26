import React from "react";
import Slider from "react-slick";

import "./index.css";

export const Swiper = ({ children }) => {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "Swiper",
  };

  return <Slider {...settings}>{children}</Slider>;
};
