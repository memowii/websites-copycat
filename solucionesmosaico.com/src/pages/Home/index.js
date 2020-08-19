import React from "react";
import { Divider } from "../../components/Divider";

import estrategiaImg from "../../images/estrategia.png";

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

      <div className="card" style={{ backgroundColor: "#9faee5" }}>
        <div className="card-body">
          <div className="text-center">
            <img src={estrategiaImg} alt="" />
          </div>

          <h5 className="card-title">Estrategia</h5>
          <ul>
            <li>Campaña publicitaria</li>
            <li>Gestión de proyectos ante instituciones públicas y privadas</li>
            <li>Manual organizacional</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
