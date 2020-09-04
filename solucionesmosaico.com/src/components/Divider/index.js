import React from "react";

import "./index.css";

export const Divider = ({ long, mid, className }) => {
  const longDivider = long ? "Divider--long" : "",
    midDivider = mid ? "Divider--mid" : "",
    _class = className ? className : "";

  return (
    <div
      className={`Divider text-center ${longDivider} ${midDivider} ${_class} animate__animated animate__fadeInDown`}
    >
      <span className="Divider__separator d-inline-block mx-auto"></span>
    </div>
  );
};
