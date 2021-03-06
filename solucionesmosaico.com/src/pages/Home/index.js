import React from "react";

import { ServiceCard } from "../../components/ServiceCard";
import { Swiper } from "../../components/Swiper";
import { SwiperImage } from "../../components/SwiperImage";
import { InnerHeading } from "../../components/InnerHeading";
import { SocialNetworks } from "../../components/SocialNetworks";
import { Divider } from "../../components/Divider";
import { useTitle } from "../../hooks/useTitle";

import "./index.css";

import estrategiaImg from "../../images/estrategia.png";
import marketingImg from "../../images/marketing.png";
import disenoFotografiaImg from "../../images/diseno-fotografia.png";
import implementacionImg from "../../images/implementacion.png";
import sliderImage1 from "../../images/Cauz-Foro-Libreria-Xalapa-150x150.png";
import sliderImage2 from "../../images/BBQ-Las-Costillitas-150x150.png";
import sliderImage3 from "../../images/Flor-Catorce-Cafeteria-Xalapa-150x150.png";
import sliderImage4 from "../../images/XALAPAJOlogo-150x150.png";
import sliderImage5 from "../../images/Pegaduro-Mosaico-150x150.png";
import sliderImage6 from "../../images/Jazz-House-Collective-150x150.png";
import sliderImage7 from "../../images/Escuela-Superior-de-Artes-Veracruz-150x150.png";
import sliderImage8 from "../../images/Tierra-Viva-Expediciones-150x150.png";
import sliderImage9 from "../../images/Licenciatura-en-Danza-Folklorica-Mexicana-150x150.png";
import sliderImage10 from "../../images/Serra-Licores-150x150.png";
import sliderImage11 from "../../images/Don-Porfirio-Barberia-150x150.jpg";
import sliderImage12 from "../../images/SISEdu-Mosaico-150x150.png";

export function Home() {
  useTitle("Mosaico Agencia de publicidad | Estrategias creativas");

  return (
    <div className="container">
      <Divider className="my-3" />

      <InnerHeading
        title="Estrategiasa y soluciones creativas"
        subtitle="Nuestros servicios"
      />

      <div className="row">
        <div className="col-md-6 col-xl-3">
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
        </div>
        <div className="col-md-6 col-xl-3">
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
        </div>
        <div className="col-md-6 col-xl-3">
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
        </div>
        <div className="col-md-6 col-xl-3">
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
        </div>
      </div>

      <h2 className="title-partner text-center font-weight-bolder mt-5 mb-4 h4">
        Hemos Trabajado con
      </h2>

      <Swiper>
        <SwiperImage img={sliderImage1} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage2} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage3} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage4} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage5} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage6} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage7} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage8} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage9} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage10} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage11} alt={"sliderImage1"} />
        <SwiperImage img={sliderImage12} alt={"sliderImage1"} />
      </Swiper>

      <h2 className="contac-title text-center font-weight-bolder mt-5 mb-4 h4">
        Transformemos tu marca
      </h2>

      <SocialNetworks />
    </div>
  );
}
