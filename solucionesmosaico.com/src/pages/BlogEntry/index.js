import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Divider } from "../../components/Divider";
import { SocialNetworks } from "../../components/SocialNetworks";

import estrategiaNegocioImg from "../../images/Estrategia-negocio.jpg";
import estrategiaNegociosImg from "../../images/Estrategia-negocios.jpg";

import "./index.css";

export const BlogEntry = () => {
  useEffect(() => {
    document.title =
      "Estrategias: las decisiones que hacen crecer tu negocio | Mosaico Agencia de publicidad";
  });

  return (
    <div className="BlogEntry container mt-3">
      <img
        className="img-fluid"
        src={estrategiaNegocioImg}
        alt="Estrategia de negocios"
      />

      <div className="BlogEntry__wraper">
        <p className="mt-4 text-justify">
          <strong>
            A pesar de que es común —e incluso inevitable— que al hablar de
            nuestra empresa hagamos referencia a las estrategias, existe un
            amplio desconocimiento de su alcance en la realización profesional
            de todos los niveles de una organización (ventas, comunicación,
            finanzas, entre otros).
          </strong>
        </p>

        <SocialNetworks className="my-4" />

        <Divider long className="my-3" />

        <p className="mt-4">
          A través de las <strong>estrategias</strong> acotamos e integramos lo
          que queremos y podemos hacer en un periodo definido, en relación con
          el <strong>contexto de nuestra empresa</strong>. Con la intención de
          brindarte herramientas que te permitan tomar con{" "}
          <strong>mayor claridad</strong>
          decisiones que hagan <strong>crecer tu negocio</strong>, en este texto
          abordaremos{" "}
          <strong>
            qué es una estrategia, su clasificación y niveles de aplicación
          </strong>
          .
        </p>

        <h3>
          <span role="img" aria-label="socket">
            💡
          </span>{" "}
          ¿Qué es una estrategia?
        </h3>

        <p>
          Una estrategia es una manera de vincular e insertar a una empresa en
          el medio exterior con el objetivo de maximizar sus beneficios a largo
          plazo; se trata de un patrón de decisiones coherente, unificado e
          integrador, dirigido al logro de ventajas sostenibles (Navas y
          Guerras).
        </p>

        <h3>
          <span role="img" aria-label="socket">
            💼
          </span>{" "}
          ¿Cómo sé qué estrategias debo aplicar o en qué área de mi empresa son
          necesarias?
        </h3>

        <p>
          Es importante iniciar por definir claramente qué es lo que vendes:
          revisa si tienes identificados cuáles son los productos y servicios
          que ofreces, escríbelos y busca describirlos de manera puntual y
          detallada; posteriormente analiza cómo vas a competir, qué es aquello
          que te permitirá mantenerte vigente en el mercado de frente a tus
          competidores y potenciales clientes; y por último, visualiza cuáles
          son las acciones concretas a realizar a partir de aquello que
          determinaste en los puntos anteriores, es ahí donde inicia la creación
          de las estrategias.
        </p>

        <p>
          En el libro <em>Dirección estratégica de la empresa</em>, Navas y
          Guerras establecen dos tipos de estrategias:
        </p>

        <ul>
          <li>
            <strong>Genéricas</strong>: recopilan información sobre la situación
            actual de la empresa y el diseño de escenarios múltiples sobre
            movimientos futuros.
          </li>
          <li>
            <strong>Específicas</strong>:buscan anticiparse a los movimientos de
            los competidores.
          </li>
        </ul>

        <p>
          El tipo de estrategia para tu empresa dependerá de lo que buscas
          enfrentar o lograr, por lo que las estrategias no son adecuadas o
          inadecuadas por sí mismas, sino con relación al objetivo que desees
          alcanzar.
        </p>

        <img
          className="img-fluid"
          src={estrategiaNegociosImg}
          alt="Estrategia de negocios"
        />

        <p>
          Para que las estrategias –genéricas o específicas– sean útiles es
          necesario identificar en qué nivel o niveles se implementarán, de
          acuerdo a las metas que quieres lograr. Para eso, es necesario
          considerar los tres niveles en los que opera una empresa:
        </p>

        <p>
          El primero, global o corporativo, ve a la empresa en su conjunto, pues
          parte de la misión, objetivos, entorno y la búsqueda de oportunidades
          para crear valor, con un propósito: la definición del campo de
          actividad. Es importante mencionar que este nivel está más enfocado
          para aquellas empresas que buscan dirigir sus acciones a negocios
          diversificados, es decir, aquellos que ofrecen distintos productos o
          servicios o que están dirigidos a mercados variados.{" "}
        </p>

        <p>
          El segundo nivel de estrategia es el competitivo o de negocio, donde
          se toman decisiones que favorezcan competir mejor en el mercado, como
          crear valor. En este nivel se desarrollan las ventajas competitivas.{" "}
        </p>

        <p>
          Por último, en el tercer nivel se encuentran las estrategias
          funcionales, que permiten utilizar mejor los recursos de cada área
          funcional que conforma la empresa. Generalmente se aplican después de
          una estrategia global o corporativa; si hacemos una analogía,
          equivaldría a pasar de lo general a lo particular.
        </p>

        <p>
          En conclusión, definir las estrategias y su nivel de aplicación
          permite una aproximación al mismo problema desde diferentes puntos de
          vista y ofrecer soluciones integrales, además de garantizar que se
          tomarán decisiones orientadas a cumplir tus objetivos empresariales en
          todas las áreas estratégicas de tu empresa y equipos de trabajo.{" "}
        </p>

        <p>
          Para más contenidos sobre publicidad y soluciones empresariales,
          síguenos en nuestras redes sociales y consulta nuestro{" "}
          <Link to="/blog">blog</Link>.
        </p>
        <Divider long className="my-3" />
        <SocialNetworks className="my-4" />
      </div>
    </div>
  );
};
