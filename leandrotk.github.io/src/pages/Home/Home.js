import React, { useEffect } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faMedium,
  faDev,
  faGoodreads,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHashtag,
  faMugHot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { AButton } from "../../components/aButton";

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
          Find me{" "}
          <AButton>
            building on github <FontAwesomeIcon icon={faGithub} />
          </AButton>
        </p>
        <p className="inline-block">
          and sharing my{" "}
          <AButton>
            thoughts on twitter <FontAwesomeIcon icon={faTwitter} />{" "}
          </AButton>
        </p>

        <div className="my-4">
          <p>I'm also publishing my work on</p>
          <AButton>
            medium <FontAwesomeIcon icon={faMedium} />,{" "}
          </AButton>
          <AButton>
            dev.to <FontAwesomeIcon icon={faDev} />,{" "}
          </AButton>
          <AButton>
            and hashnode <FontAwesomeIcon icon={faHashtag} />
          </AButton>
        </div>

        <p className="my-4">
          Find my books reviews on{" "}
          <AButton>
            goodreads <FontAwesomeIcon icon={faGoodreads} />
          </AButton>
        </p>

        <p>You can support my work on</p>

        <AButton>
          patreon <FontAwesomeIcon icon={faPatreon} />
          ,&nbsp;
        </AButton>
        <AButton>
          ko-fi <FontAwesomeIcon icon={faMugHot} />
          ,&nbsp;
        </AButton>
        <AButton>
          and substack <FontAwesomeIcon icon={faEnvelope} />
        </AButton>
      </section>
      <section className="writing">
        <h1 className="uppercase text-3xl font-bold text-white mt-12 mb-4">
          writings.
        </h1>

        <ul>
          <li className="mb-4">
            <div class="text-sm text-gray-600">
              <time datetime="2020-07-19T00:00:00.000Z">2020-07-19</time>
            </div>
            <AButton className="text-left underline">
              A Mental Model to think in TypeScript
            </AButton>
          </li>
        </ul>
      </section>
    </div>
  );
};
