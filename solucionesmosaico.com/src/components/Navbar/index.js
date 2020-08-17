import React, { useState } from "react";
import {
  Collapse,
  Navbar as RsNavbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  // NavbarText,
} from "reactstrap";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <RsNavbar expand="md" light color="white" >
      <NavbarToggler onClick={toggle} className="ml-auto" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">EQUIPO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">BLOG</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">#JuntosPorLasMiPyMEs</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </RsNavbar>
  );
}
