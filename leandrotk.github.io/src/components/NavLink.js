import React from "react";
import { NavLink as RDNavLink } from "react-router-dom";

export const NavLink = ({ children, to, className, hover }) => {
  className = `${className} ${hover ? "hover:text-white" : ""}`;

  return (
    <RDNavLink to={to} className={className}>
      {children}
    </RDNavLink>
  );
};
