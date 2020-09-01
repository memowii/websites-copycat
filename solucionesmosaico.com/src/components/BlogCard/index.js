import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({ img, text, link }) => {
  return (
    <div class="card text-center">
      <img src={img} class="card-img-top" alt="Estrategia de negocios" />
      <div class="card-body">
        <p class="card-text">{text}</p>
        <Link to={link} class="btn btn-outline-dark">
          Ver más
        </Link>
      </div>
    </div>
  );
};
