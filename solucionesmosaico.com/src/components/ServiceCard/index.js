import React from "react";

export const ServiceCard = ({ bgc, image, title, remarks }) => {
  return (
    <div
      className="card rounded-0 border-0 text-white h-100"
      style={{ backgroundColor: bgc }}
    >
      <div className="card-body">
        <div className="text-center mb-4">
          <img src={image} alt="" />
        </div>

        <h5 className="card-title text-center mb-4">{title}</h5>

        <ul>
          {remarks.map((remark, index) => (
            <li key={index}>{remark}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
