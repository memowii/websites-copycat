import React from "react";

export const AButton = ({ children, className }) => {
  return (
    <button
      className={`background-transparent outline-none focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
