import React, { useEffect } from "react";

import { TeammateCard } from "../../components/TeammateCard";
import { InnerHeading } from "../../components/InnerHeading";
import { Divider } from "../../components/Divider";

export const Equipo = () => {
  useEffect(() => {
    document.title = "Equipo | Mosaico Agencia de publicidad";
  });

  return (
    <div className="container">
      <Divider className="my-3" />

      <InnerHeading title="Equipo joven y comprometido con proyectos que le apasionan" />

      <div className="row">
        <div className="col-md-4">
          <TeammateCard
            name="Monse"
            job="Cuentas y finanzas"
            bio="
        Publirrelacionista de 27 años, xalapeña amante de la música, los postres
        y conocer lugares. Gaudí, Van Gogh, Gauguín son sus artistas favoritos;
        Bellas Artes, su rincón favorito de México; Venecia y Barcelona, dos de
        sus ciudades favoritas; disfruta de caminar, sobre todo en los mercados,
        canta, chifla y baila cada vez que hay oportunidad.
      "
          />
        </div>
        <div className="col-md-4">
          <TeammateCard
            name="Jorge"
            job="Implementación y procesos"
            bio="Psicólogo de 28 años, nacido en Xalapa. Siempre busca la excelencia 
        en su vida y está interesado en la creación y organización de sucesos que 
        enriquezcan a tantas personas como sea posible. Le gusta investigar el por 
        qué de las cosas y probar sensaciones nuevas, sin importar que sean incómodas. 
        Es amante de las actividades al aire libre, los animales, los deportes y el cine. 
        Está de acuerdo con la idea de esperar lo mejor, prepararse para lo peor y aceptar 
        lo que venga."
          />
        </div>
        <div className="col-md-4">
          <TeammateCard
            name="Andrés"
            job="Marketing"
            bio="Nacido en el sur de Veracruz, hace casi treinta. Formado en publicidad y 
        relaciones públicas. Su lugar feliz: una hamaca en la playa. Escucha —y disfruta— 
        tanto al reguetón como a Mahler, a quien admira junto con Nietzsche. Le apasionan 
        los medios sociales y el cine, especialmente el ciberpunk. No le gusta describirse 
        en tercera persona."
          />
        </div>
      </div>

      <div className="row mt-md-4">
        <div className="col-md-6">
          <TeammateCard
            name="Sergio"
            job="Fotografía"
            bio="Nació en el Valle de Oaxaca, rodeado de huizaches y plantíos de alfalfa. A 
        los 16 años comenzó a interesarse por la fotografía, y pronto esa pasión lo hizo 
        viajar a Xalapa para formarse profesionalmente. Tras su paso por las aulas de la 
        Universidad Veracruzana, y luego de 15 años de registrar instantes, cree que la 
        fotografía es su manera de interpretar el mundo. El legendario Cartier-Bresson es 
        uno de sus creadores favoritos, y al igual que él, piensa que la fotografía es la 
        manera más sencilla de comunicar para los seres humanos, que antes de hablar, ven 
        el mundo. Practica KravMaga, tiene dos gatos y una azotea verde. Le encanta la buena 
        música, y los retos fotográficos."
            bgc="#00A499"
          />
        </div>
        <div className="col-md-6">
          <TeammateCard
            name="Raquel"
            job="Editorial"
            bio="Se graduó de Letras Hispánicas. Además del estudio de la literatura, la edición 
        y la gestión cultural, le encantan el cine, los buenos libros y el café recién hecho. 
        Ama caminar, conocer la historia de lugares y personas, así como descubrir inspiración 
        en los momentos más cotidianos. Se rehúsa a dejar de aprender."
            bgc="#00A499"
          />
        </div>
      </div>

      <div className="row mt-md-4">
        <div className="col-md-6">
          <TeammateCard
            name="Clari"
            job="Contenidos"
            bio="Publirrelacionista poblana. Siempre en búsqueda del aprendizaje y crecimiento 
        constante. Aunque se considera una persona versátil, cree que es mejor enfocarse en 
        las metas y disfrutar del proceso que requiere alcanzarlas. Aprovecha los momentos 
        libres para leer y ver documentales. Ama pasar tiempo con la familia, la cocina 
        mexicana y pueblear. Cree y se apasiona por los proyectos que generan impacto en otros."
            bgc="#00A499"
          />
        </div>
        <div className="col-md-6">
          <TeammateCard
            name="Daniel"
            job="Creativo"
            bio="Graduado de PyRRPP, interesado por la ilustración, animación y fotografía; 
        practica todos los días para mejorar sus habilidades; es apasionado de la escalada, 
        la naturaleza y las buenas charlas. Le gustan los retos."
            bgc="#00A499"
          />
        </div>
      </div>
    </div>
  );
};
