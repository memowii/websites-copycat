import React from "react";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto my-8 sm:my-16 px-4 md:w-full md:max-w-xl">
      {children}
      <Footer />
    </div>
  );
};
