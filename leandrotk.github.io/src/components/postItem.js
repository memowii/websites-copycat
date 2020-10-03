import React from "react";

import { AButton } from "./aButton";

export const PostItem = ({ dateTime, date, title }) => {
  return (
    <li className="mb-4 sm:flex">
      <div className="text-sm text-gray-600 sm:mr-8 sm:flex-none "> 
        <time dateTime={dateTime}>{date}</time>
      </div>
      <AButton className="text-left underline sm:flex-1">{title}</AButton>
    </li>
  );
};
