import React from "react";
import Slider from "react-slick";

import { Divider } from "../../components/Divider";
import { ServiceCard } from "../../components/ServiceCard";
import estrategiaImg from "../../images/estrategia.png";
import marketingImg from "../../images/marketing.png";
import disenoFotografiaImg from "../../images/diseno-fotografia.png";
import implementacionImg from "../../images/implementacion.png";

export function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container">
      <Divider />

      <h1 className="text-center h4 font-weight-bolder">
        Estrategiasa y soluciones creativas
      </h1>

      <h2 className="h5 font-weight-bolder text-center mt-4 mb-4">
        Nuestros servicios
      </h2>

      <ServiceCard
        bgc="#9faee5"
        image={estrategiaImg}
        title="Estrategia"
        remarks={[
          "Campaña publicitaria",
          "Gestión de proyectos ante instituciones públicas y privadas",
          "Manual organizacional",
        ]}
      />

      <ServiceCard
        bgc="#59cbe8"
        image={marketingImg}
        title="Marketing"
        remarks={[
          "Administración de redes sociales",
          "Investigación de mercados",
          "Estudio de mercado",
          "Branding",
          "Naming",
        ]}
      />

      <ServiceCard
        bgc="#a2e4b8"
        image={disenoFotografiaImg}
        title="Diseño y Fotografía"
        remarks={[
          "Diseño gráfico",
          "Sesión fotográfica",
          "Portafolio para grupos artísticos o empresas",
        ]}
      />

      <ServiceCard
        bgc="#ffb81c"
        image={implementacionImg}
        title="Implementación"
        remarks={[
          "Cobertura de eventos artísticos y corporativos",
          "Asesoría en estrategias de comunicación",
          "Organización y gestión de eventos",
          "Evaluación de clima laboral",
          "Registro de marca ante IMPI",
          "Registro de obra ante INDAUTOR",
        ]}
      />

      <h2 className="text-center font-weight-bolder mt-5">Hemos Trabajado con</h2>

      <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    </div>
  );
}
