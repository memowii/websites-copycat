import React, { useEffect } from "react";
import Typed from "typed.js";

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
            building on github {IconStore("faGithub")}
          </NavLink>
        </p>{" "}
        <p className="inline-block">
          and sharing my{" "}
          <NavLink to="#" hover>
            thoughts on twitter {IconStore("faTwitter")} />{" "}
          </NavLink>
        </p>
        <div className="my-4">
          <p>I'm also publishing my work on</p>
          <NavLink to="#" hover>
            medium {IconStore("faMedium")},{" "}
          </NavLink>
          <NavLink to="#" hover>
            dev.to {IconStore("faDev")},{" "}
          </NavLink>
          <NavLink to="#" hover>
            and hashnode {IconStore("faHashtag")}
          </NavLink>
        </div>
        <p className="my-4">
          Find my books reviews on{" "}
          <NavLink to="#" hover>
            goodreads {IconStore("faGoodreads")}
          </NavLink>
        </p>
        <p>You can support my work on</p>
        <NavLink to="#" hover>
          patreon {IconStore("faPatreon")}
          ,&nbsp;
        </NavLink>
        <NavLink to="#" hover>
          ko-fi {IconStore("faMugHot")}
          ,&nbsp;
        </NavLink>
        <NavLink to="#" hover>
          and substack {IconStore("faEnvelope")}
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
