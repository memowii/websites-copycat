import React, { useEffect } from "react";

export const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Mosaico Agencia de publicidad";
  });

  return <div>Blog</div>;
};
