import React, { useState } from "react";
import {
  Collapse,
  Navbar as RsNavbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import "./index.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const isNavbarCollapseShown = (e) => {
    const navbarCollapse = e.target.closest(".collapse");
    return getComputedStyle(navbarCollapse).display === "flex";
  };

  const handleClick = (e) => !isNavbarCollapseShown(e) && toggle();

  return (
    <RsNavbar expand="lg" light color="white" className="p-0">
      <div className="px-3 py-2 w-100 d-flex justify-content-end d-lg-none">
        <NavbarToggler onClick={toggle} />
      </div>

      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="nav--gray nav--font-open-sans navbar-nav--expanded"
          navbar
        >
          <NavItem>
            <NavLink
              className="nav-link nav-link--hover-blue nav-link--border px-4"
              to="/"
              exact
              activeClassName="active"
              onClick={(e) => handleClick(e)}
            >
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link nav-link--hover-blue nav-link--border px-4"
              to="/equipo"
              exact
              activeClassName="active"
              onClick={(e) => handleClick(e)}
            >
              EQUIPO
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link nav-link--hover-blue nav-link--border px-4"
              to="/blog"
              exact
              activeClassName="active"
              onClick={(e) => handleClick(e)}
            >
              BLOG
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link nav-link--hover-blue nav-link--border px-4"
              to="/juntos-mipymes"
              exact
              activeClassName="active"
              onClick={(e) => handleClick(e)}
            >
              #JuntosPorLasMiPyMEs
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </RsNavbar>
  );
}
