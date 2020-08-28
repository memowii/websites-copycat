import React, { useState } from "react";
import {
  Collapse,
  Navbar as RsNavbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./index.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <RsNavbar expand="lg" light color="white" className="p-0">
      <div className="px-3 py-2 w-100 d-flex justify-content-end d-lg-none">
        <NavbarToggler onClick={toggle} className="" />
      </div>

      <Collapse isOpen={isOpen} navbar>
        <Nav className="nav--gray nav--font-open-sans navbar-nav--expanded" navbar>
          <NavItem active>
            <NavLink href="#" className="nav-link--hover-blue nav-link--border px-4">
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-link--hover-blue nav-link--border px-4">
              EQUIPO
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-link--hover-blue nav-link--border px-4">
              BLOG
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-link--hover-blue nav-link--border px-4">
              #JuntosPorLasMiPyMEs
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </RsNavbar>
  );
}
