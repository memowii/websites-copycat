import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const NotFound = () => {
  return (
    <div className="container text-center">
      <h1 className="text-primary mb-4">Parece que esta página no existe.</h1>

      <p className="mb-5">
        Parece que el enlace hasta aquí no sirve. ¿Quieres intentar una
        búsqueda?
      </p>

      <div className="d-flex justify-content-center">
        <form className="w-">
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
