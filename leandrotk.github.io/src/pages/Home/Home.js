import React, { useEffect } from "react";
import Typed from "typed.js";

const typedJsOptions = {
  strings: [
    "software engineer",
    "writer",
    "lifelong learner",
    "problem solver",
  ],
  typeSpeed: 50,
  loop: true,
  backDelay: 1200,
};

export const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typed-info", typedJsOptions);

    return () => {
      typed.destroy();
    };
  });

  return (
    <div className="container mx-auto my-8 px-4">
      <section className="about">
        <h1 className="uppercase text-3xl font-bold text-white mt-12 mb-4">
          tk.
        </h1>

        <div className="mb-3">
          I'm <span className="uppercase">tk</span>, a{" "}
          <span className="typed-info bg-white text-black">
            software engineer
          </span>
        </div>

        <p className="inline-block">
          Find me <a href="#">building on github</a>
        </p>
        <p className="inline-block">
          and sharing my <a href="#">thoughts on twitter</a>
        </p>

        <div className="my-4">
          <p>I'm also publishing my work on</p>
          <a href="#">medium, </a>
          <a href="#">dev.to, </a>
          <a href="#">and hashnode, </a>
        </div>
      </section>
    </div>
  );
};
