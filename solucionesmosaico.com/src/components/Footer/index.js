import React from "react";

import './index.css'

export const Footer = () => {
  return (
    <div className="Footer d-flex justify-content-center p-5 mt-4 text-white small">
      Mosaico Agencia de publicidad © {(new Date()).getFullYear()}
    </div>
  );
};
