import React from "react";

import "./index.css";

export const TeammateCard = ({ name, job, bio, bgc }) => {
  return (
    <div
      className="TeammateCard d-flex flex-column text-center"
      style={{ backgroundColor: bgc }}
    >
      <h3 className="TeammateCard_name font-weight-bolder mb-3">{name}</h3>
      <p className="TeammateCard__job text-uppercase">{job}</p>
      <p className="TeammateCard__bio">{bio}</p>
    </div>
  );
};
