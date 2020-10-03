import React from "react";
import { AButton } from "./aButton";

export const Footer = () => {
  return (
    <footer className="py-3 text-gray-700 text-xs max-w-2xl w-full mt-0 mx-auto mb-4 w-full align-top text-center sm:clearfix">
      <div className="h-5 leading-5 sm:float-left">Copyright © 2020 TK</div>
      <div className="sm:float-right">
        <nav>
          <ul className="m-0 p-0 list-style-none">
            <Li className="border-r">
              <AButton className="mr-4 underline">Home</AButton>
            </Li>
            <Li className="border-r">
              <AButton className="mr-4 underline">Writing</AButton>
            </Li>
            <Li className="border-r">
              <AButton className="mr-4 underline">Projects</AButton>
            </Li>
            <Li className="sm:mr-0">
              <AButton className="mr-4 underline">Quotes</AButton>
            </Li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

const Li = ({ children, className }) => (
  <li className={`inline-block align-top mr-4 border-gray-700 ${className}`}>
    {children}
  </li>
);
