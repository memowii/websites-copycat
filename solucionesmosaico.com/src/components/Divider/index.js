import React from "react";

import "./index.css";

export const Divider = ({ long }) => {
  const longDivider = long ? "Divider--long" : "py-3";

  return (
    <div className={`Divider text-center ${longDivider}`}>
      <span className="Divider__separator d-inline-block mx-auto"></span>
    </div>
  );
};
