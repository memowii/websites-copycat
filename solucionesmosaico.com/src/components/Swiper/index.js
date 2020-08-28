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
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "Swiper",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};
