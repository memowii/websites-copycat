import React from "react";
import { Divider } from "../../components/Divider";

import estrategiaImg from "../../images/estrategia.png";
import { ServiceCard } from "../../components/ServiceCard";

export function Home() {
  return (
    <div className="container">
      <Divider />

      <h1 className="text-center h4 font-weight-bolder">
        Estrategiasa y soluciones creativas
      </h1>

      <h2 className="h5 font-weight-bolder text-center mt-4">
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
    </div>
  );
}
