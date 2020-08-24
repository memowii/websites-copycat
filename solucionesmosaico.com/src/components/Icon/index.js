import React from "react";

import "./index.css";

export const Icon = ({ href, children }) => {
  return (
    <a
      href={href}
      className="Icon d-inline-block rounded-circle mx-1 text-center text-white text-decoration-none"
    >
      {children}
    </a>
  );
};
