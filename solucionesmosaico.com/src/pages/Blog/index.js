import React, { useEffect } from "react";

import { InnerHeading } from "../../components/InnerHeading";
import { Divider } from "../../components/Divider";
import { BlogCard } from "../../components/BlogCard";

import estrategiaNegocioImg from "../../images/Estrategia-negocio.jpg";

export const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Mosaico Agencia de publicidad";
  });

  return (
    <div className="container">
      <InnerHeading
        title="Blog"
        subtitle="Bienvenido a nuestro blog, donde encontrarás artículos sobre 
        publicidad, marketing, estrategias, emprendimiento, redes sociales, 
        negocios, tendencias y todo lo que nos apasiona."
      />

      <Divider long />

      <div className="row mt-4">
        <div className="col col-md-6">
          <BlogCard img={estrategiaNegocioImg} 
          text="A pesar de que es común —e incluso inevitable— que al hablar de
          nuestra empresa hagamos referencia a las estrategias, existe un amplio
          desconocimiento de su alcance en la realización profesional de todos
          los niveles de una organización..." 
          link="/blog/estrategias-decisiones-crecer-negocio"
          /> 
        </div>
      </div>
    </div>
  );
};
