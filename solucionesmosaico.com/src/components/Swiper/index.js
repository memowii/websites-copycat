import React from "react";
import Slider from "react-slick";

import './index.css';

import sliderImage1 from '../../images/Cauz-Foro-Libreria-Xalapa-150x150.png';
import sliderImage2 from '../../images/BBQ-Las-Costillitas-150x150.png';
import sliderImage3 from '../../images/Flor-Catorce-Cafeteria-Xalapa-150x150.png';
import sliderImage4 from '../../images/XALAPAJOlogo-150x150.png';
import sliderImage5 from '../../images/Pegaduro-Mosaico-150x150.png';
import sliderImage6 from '../../images/Jazz-House-Collective-150x150.png';
import sliderImage7 from '../../images/Escuela-Superior-de-Artes-Veracruz-150x150.png';
import sliderImage8 from '../../images/Tierra-Viva-Expediciones-150x150.png';
import sliderImage9 from '../../images/Licenciatura-en-Danza-Folklorica-Mexicana-150x150.png';
import sliderImage10 from '../../images/Serra-Licores-150x150.png';
import sliderImage11 from '../../images/Don-Porfirio-Barberia-150x150.jpg';
import sliderImage12 from '../../images/SISEdu-Mosaico-150x150.png';

export const Swiper = () => {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'Slider',
  };

  return (
    <Slider {...settings}>
        <div className="d-flex justify-content-center">
          <img src={sliderImage1} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage2} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage3} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage4} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage5} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage6} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage7} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage8} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage9} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage10} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage11} alt="Cauz Foro Librería"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={sliderImage12} alt="Cauz Foro Librería"/>
        </div>
      </Slider>
  );
};
