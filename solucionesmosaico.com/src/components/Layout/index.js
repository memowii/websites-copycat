import React from "react";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Divider } from "../../components/Divider";

export function Layout(props) {
  console.log('props', props);
  return (
    <>
      <Navbar />
      <Divider />
      {props.children}
      <Footer />
    </>
  );
}
