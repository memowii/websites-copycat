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

import IconStore from "../../components/IconStore";

import { PostItem } from "../../components/postItem";
import postsData from "./postsData.json";
import projectsData from "./projectsData.json";
import { NavLink } from "../../components/NavLink";

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
    <div className="container mx-auto my-8 sm:my-16 px-4 md:w-full md:max-w-xl">
      <section className="about">
        <h1 className="h1 uppercase">tk.</h1>
        <div className="mb-3">
          I'm <span className="uppercase">tk</span>, a{" "}
          <span className="typed-info bg-white text-black">
            software engineer
          </span>
        </div>
        <p className="inline-block">
          Find me{" "}
          <NavLink to="#" hover>
            {/* building on github <FontAwesomeIcon icon={faGithub} /> */}
            building on github {IconStore("faGithub")}
          </NavLink>
        </p>{" "}
        <p className="inline-block">
          and sharing my{" "}
          <NavLink to="#" hover>
            thoughts on twitter <FontAwesomeIcon icon={faTwitter} />{" "}
          </NavLink>
        </p>
        <div className="my-4">
          <p>I'm also publishing my work on</p>
          <NavLink to="#" hover>
            medium <FontAwesomeIcon icon={faMedium} />,{" "}
          </NavLink>
          <NavLink to="#" hover>
            dev.to <FontAwesomeIcon icon={faDev} />,{" "}
          </NavLink>
          <NavLink to="#" hover>
            and hashnode <FontAwesomeIcon icon={faHashtag} />
          </NavLink>
        </div>
        <p className="my-4">
          Find my books reviews on{" "}
          <NavLink to="#" hover>
            goodreads <FontAwesomeIcon icon={faGoodreads} />
          </NavLink>
        </p>
        <p>You can support my work on</p>
        <NavLink to="#" hover>
          patreon <FontAwesomeIcon icon={faPatreon} />
          ,&nbsp;
        </NavLink>
        <NavLink to="#" hover>
          ko-fi <FontAwesomeIcon icon={faMugHot} />
          ,&nbsp;
        </NavLink>
        <NavLink to="#" hover>
          and substack <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </section>
      <section className="writing">
        <h1 className="h1">writings.</h1>

        <ul>
          {postsData.map((postItem, idx) => (
            <React.Fragment key={idx}>
              <PostItem
                dateTime={postItem.dateTime}
                date={postItem.date}
                title={postItem.title}
              />
            </React.Fragment>
          ))}
        </ul>
      </section>

      <section className="projects">
        <h1 className="h1">projects.</h1>

        <ul>
          {projectsData.map((project, idx) => (
            <li className="mb-2" key={idx}>
              <strong>
                <NavLink to="#" className="underline-custom">
                  {project.topic}
                </NavLink>
              </strong>
              : {project.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
