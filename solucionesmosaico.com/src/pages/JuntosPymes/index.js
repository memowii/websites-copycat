import React from "react";
import { NavLink } from "react-router-dom";

import { InnerHeading } from "../../components/InnerHeading";
import { Divider } from "../../components/Divider";
import { Notice } from "../../components/Notice";
import { useTitle } from "../../hooks/useTitle";
import { useWithoutDivider } from "../../hooks/useWithoutDivider";

export const JuntosPymes = () => {
  useTitle("Juntos por las MiPyMes | Mosaico Agencia de publicidad");
  useWithoutDivider();

  return (
    <div className="container">
      <Notice>
        <InnerHeading
          title="Juntos por las MiPyMes"
          subtitle="¡Gracias a quienes participaron!"
        />

        <Divider mid className="mb-4" />

        <p>
          La situación económica derivada por la <strong>COVID-19</strong> ha
          afectado a las <strong>micro</strong>,<strong>pequeñas</strong> y{" "}
          <strong>medianas empresas</strong>, quienes responsablemente
          decidieron cerrar de forma temporal sus establecimientos, debiendo
          trasladarse al ámbito digital.
        </p>

        <p>
          Conscientes de ello y de lo complejo que puede resultar dicho proceso,
          lanzamos la{" "}
          <a href="/">
            convocatoria <strong>#JuntosPorLasMiPyMes</strong>
          </a>
          .
        </p>

        <p>
          Elegiremos a <strong>tres negocios</strong> para brindarles una{" "}
          <strong>auditoría de marketing digital sin costo</strong>. Te
          invitamos a seguirnos en <a href="/">Facebook</a> o{" "}
          <a href="/">Instagram</a>, donde daremos a conocer los resultados el
          27 de junio, Día de las Microempresas y las Pequeñas y Medianas
          Empresas.
        </p>

        <p>
          <NavLink to="/juntos-mipymes/tyc" exact>
            Términos y condiciones
          </NavLink>
        </p>
      </Notice>
    </div>
  );
};
