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
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <RsNavbar expand="lg" light color="white" className="p-0">
      <div className="px-3 py-2 w-100 d-flex justify-content-end">
        <NavbarToggler onClick={toggle} className="" />
      </div>

      <Collapse isOpen={isOpen} navbar>
        <Nav className="nav--gray nav--font-open-sans" navbar>
          <NavItem>
            <NavLink href="#" className="nav-link--hover-blue px-4 border-bottom border-top">
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-link--hover-blue px-4 border-bottom">
              EQUIPO
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-link--hover-blue px-4 border-bottom">
              BLOG
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-link--hover-blue px-4 border-bottom">
              #JuntosPorLasMiPyMEs
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </RsNavbar>
  );
}
