import React from "react";
import { NavLink as RDNavLink } from "react-router-dom";

export const NavLink = ({ children, to, className, hover, dataTip }) => {
  className = `${className} ${hover ? "hover:text-white" : ""}`;

  return (
    <RDNavLink to={to} className={className} data-tip={dataTip}>
      {children}
    </RDNavLink>
  );
};
