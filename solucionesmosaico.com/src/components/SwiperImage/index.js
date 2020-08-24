import React from "react";

export const SwiperImage = ({ img, alt }) => {
  return (
    <div className="d-flex justify-content-center">
      <img src={img} alt={alt} />
    </div>
  );
};
