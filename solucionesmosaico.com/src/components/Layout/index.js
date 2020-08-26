import React from "react";

import { Navbar } from "../Navbar";
import { Footer } from '../Footer';

export function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
