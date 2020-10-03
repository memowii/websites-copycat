import React from "react";

import { NavLink } from "react-router-dom";

export const PostItem = ({ dateTime, date, title }) => {
  return (
    <li className="mb-4 sm:flex">
      <div className="text-sm text-gray-600 sm:mr-8 sm:flex-none ">
        <time dateTime={dateTime}>{date}</time>
      </div>
      <div>
        <NavLink to="#" className="text-left underline-custom sm:flex-1">
          {title}
        </NavLink>
      </div>
    </li>
  );
};
