import React from "react";

import "./index.css";

export const InnerHeading = ({ title, subtitle }) => (
  <div className="InnerHeading">
    <h1 className="text-center h4 font-weight-bolder">{title}</h1>

    {subtitle && (
      <h2 className="h5 font-weight-bolder text-center mt-4 mb-4">
        {subtitle}
      </h2>
    )}
  </div>
);
