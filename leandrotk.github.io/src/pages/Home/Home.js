import React, { useEffect } from "react";
import Typed from "typed.js";
import ReactTooltip from "react-tooltip";

import IconStore from "../../components/IconStore";
import { PostItem } from "../../components/postItem";
import postsData from "./postsData.json";
import projectsData from "./projectsData.json";
import { NavLink } from "../../components/NavLink";
import { useTitle } from "../../hooks/useTitle";

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
  useTitle("Tk");

  useEffect(() => {
    const typed = new Typed(".typed-info", typedJsOptions);

    return () => {
      typed.destroy();
    };
  });

  return (
    <>
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
          <NavLink to="#" hover dataTip="github">
            building on github {IconStore("faGithub")}
          </NavLink>
        </p>{" "}
        <p className="inline-block">
          and sharing my{" "}
          <NavLink to="#" hover dataTip="twitter">
            thoughts on twitter {IconStore("faTwitter")}{" "}
          </NavLink>
        </p>
        <div className="my-4">
          <p>I'm also publishing my work on</p>
          <NavLink to="#" hover dataTip="medium">
            medium {IconStore("faMedium")},{" "}
          </NavLink>
          <NavLink to="#" hover dataTip="devto">
            dev.to {IconStore("faDev")},{" "}
          </NavLink>
          <NavLink to="#" hover dataTip="hashnode">
            and hashnode {IconStore("faHashtag")}
          </NavLink>
        </div>
        <p className="my-4">
          Find my books reviews on{" "}
          <NavLink to="#" hover dataTip="goodreads">
            goodreads {IconStore("faGoodreads")}
          </NavLink>
        </p>
        <p>You can support my work on</p>
        <NavLink to="#" hover dataTip="patreon">
          patreon {IconStore("faPatreon")}
          ,&nbsp;
        </NavLink>
        <NavLink to="#" hover dataTip="kofi">
          ko-fi {IconStore("faMugHot")}
          ,&nbsp;
        </NavLink>
        <NavLink to="#" hover dataTip="substack">
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
                to={"/article"}
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

      <ReactTooltip place="bottom" type="dark" effect="float" border />
    </>
  );
};
