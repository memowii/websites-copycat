import React, { useEffect } from "react";

import { InnerHeading } from "../../components/InnerHeading";
import { Divider } from '../../components/Divider'

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

    </div>
  );
};
