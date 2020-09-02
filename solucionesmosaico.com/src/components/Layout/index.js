import React from "react";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Divider } from "../../components/Divider";

export function Layout(props) {
  return (
    <>
      <Navbar />
      <Divider className="my-3" />
      {props.children}
      <Footer />
    </>
  );
}
