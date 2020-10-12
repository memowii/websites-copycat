import React from "react";
import { NavLink } from "react-router-dom";

import { useTitle } from "../hooks/useTitle";
import IconStore from "../components/IconStore";
import { Highlight } from "../components/Highlight";
import img1 from "../assets/images/cover.jpg";

export const Article = () => {
  useTitle("Constant feedback driven development with Nodemon");

  return (
    <div className="Article">
      <div className="mb-5">
        <NavLink to="/">{IconStore("faLongArrowAltLeft")} HOME</NavLink>
      </div>

      <article className="mb-10">
        <header>
          <h1 className="h1 mt-0 mb-0 text-3xl leading-tight">
            Constant feedback driven development with Nodemon
          </h1>

          <div className="mt-2 text-sm">
            <span className="tracking-widest font-bold">
              <span>TK </span>
            </span>

            <div className="inline">
              <time dateTime="2020-05-04T00:00:00.000Z">2020-05-04</time>
            </div>

            <div>
              <NavLink to="#" className="underline-custom">
                #typescript
              </NavLink>{" "}
              <NavLink to="#" className="underline-custom">
                #javascript
              </NavLink>
            </div>
          </div>
        </header>
        <figure className="text-center my-8">
          <img src={img1} alt="city" className="w-100" />
          <figcaption className="text-xs mt-4">
            Photo by{" "}
            <NavLink to="#" className="underline-custom">
              chuttersnap
            </NavLink>
          </figcaption>
        </figure>
        <hr className="my-2" />
        This post is part of the{" "}
        <NavLink to="#" className="underline-custom">
          TypeScript Learning Series.
        </NavLink>
        <p>
          I'm learning a lot about building new projects using TypeScript. Today
          I want to tell you more about building things with constant feedback
          and how to make the development dynamic.
        </p>
        <p>
          At first, when I started building things with TypeScript, for every
          function I built, I had two options:
        </p>
        <ol className="list-decimal my-4 pl-10">
          <li>
            Execute the file by using <code>ts-node</code>.
          </li>
          <li>
            Open a repl with <code>ts-node</code> and copy and paste the
            function there.
          </li>
        </ol>
        <p>
          At first, it is ok to test simple things. But you all need to stop the
          development and lose the flow. I wanted a more dynamic development
          flow and I found <code>nodemon</code>.
        </p>
        <p>
          <code>nodemon</code> is not specific for TypeScript. It is a
        </p>
        <blockquote>
          Tool that helps develop node.js based applications by automatically
          restarting the node application when file changes in the directory are
          detected. - nodemon.io
        </blockquote>
        <p>
          So, for every file you saved, <code>nodemon</code> will restart the
          application. With that, you can have constant feedback from what you
          are building.
        </p>
        <h2 className="h2">Setting up</h2>
        <p>If you really like this tooling, you can install it globally:</p>
        <Highlight
          content={`
          <pre>
            <code class="leading-6 bash">npm install -g nodemon</code>
          </pre>
          `}
        />
        <p>
          But I like to configure dependencies for each project. So I install it
          in the dev dependencies in the project I want to use it.
        </p>
        <Highlight
          content={`
          <pre>
            <code class="leading-6 bash">npm install --save-dev nodemon</code>
          </pre>
          `}
        />
        <p>
          After installing it, we have to configure the nodemon json config.
          This is the simple configuration I did for my{" "}
          <NavLink to="#">publisher tool</NavLink>:
        </p>
        <Highlight
          content={`
          <pre>
            <code class="leading-6 json">
{
  "watch": [
    "src",
    "examples"
  ],
  "ext": ".ts,.js,.html,.json",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
            </code>
          </pre>
          `}
        />
      </article>
    </div>
  );
};
