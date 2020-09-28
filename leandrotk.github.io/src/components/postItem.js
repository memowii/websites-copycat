import React from "react";

import { AButton } from "./aButton";

export const PostItem = ({ dateTime, date, title }) => {
  return (
    <li className="mb-4">
      <div className="text-sm text-gray-600">
        <time dateTime={dateTime}>{date}</time>
      </div>
      <AButton className="text-left underline">{title}</AButton>
    </li>
  );
};
