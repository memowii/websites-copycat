import React from "react";
import { NavLink } from "react-router-dom";

import { InnerHeading } from "../../components/InnerHeading";
import { Divider } from "../../components/Divider";
import { Notice } from "../../components/Notice";
import { useTitle } from "../../hooks/useTitle";
import { useWithoutDivider } from "../../hooks/useWithoutDivider";

export const Terminos = () => {
  useTitle("Juntos por las MiPyMes | Mosaico Agencia de publicidad");
  useWithoutDivider();

  return (
    <div className="container">
      <Notice>
        <InnerHeading title="Juntos por las MiPyMes" />

        <Divider mid className="mb-4" />

        <p>
          <strong>Términos y condiciones</strong>
        </p>

        <ol>
          <li>
            <p>
              Los miembros de Mosaico Agencia de Publicidad seleccionarán 3
              empresas de acuerdo con los siguientes criterios: cumplimiento de
              las características de una MiPyMe, giro o actividad comercial,
              redes sociales vigentes e historia de la empresa.
            </p>
          </li>
          <li>
            <p>
              Las empresas seleccionadas serán acreedoras a una auditoría de
              marca en redes sociales sin costo, la cual incluye: Reporte +
              Videollamada con análisis y sugerencias de marketing digital.
            </p>
          </li>
          <li>
            <p>
              Los interesados podrán enviar su solicitud hasta el 20 de junio de
              2020.
            </p>
          </li>
          <li>
            <p>
              Los resultados serán publicados el 27 de junio, Día de las
              Microempresas y las Pequeñas y Medianas Empresas, mediante las
              redes sociales de Mosaico Agencia de Publicidad.
            </p>
          </li>
          <li>
            <p>
              Las personas que envíen su solicitud dan el permiso a Mosaico
              Agencia de Publicidad para publicar total o parcialmente datos
              como nombre, imagen o historia de la empresa.
            </p>
          </li>
          <li>
            <p>
              A partir de que la MiPyMe sea notificada de ser seleccionada,
              recibirá el reporte final en un lapso de 3 a 4 semanas.
            </p>
          </li>
          <li>
            <p>
              Mosaico Agencia de Publicidad se reserva el derecho de suspender o
              cancelar.
            </p>
          </li>

          <div className="d-flex justify-content-center">
            <NavLink
              class="btn btn-primary text-white"
              to="/juntos-mipymes"
              role="button"
            >
              Volver
            </NavLink>
          </div>
        </ol>
      </Notice>
    </div>
  );
};
