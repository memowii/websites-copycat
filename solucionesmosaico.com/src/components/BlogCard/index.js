import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({ img, text, link }) => (
  <div className="card text-center">
    <Link to={link}>
      <img src={img} className="card-img-top" alt="Estrategia de negocios" />
    </Link>
    <div className="card-body">
      <p className="card-text">{text}</p>
      <Link to={link} className="btn btn-outline-dark">
        Ver más
      </Link>
    </div>
  </div>
);
