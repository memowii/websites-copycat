import React from "react";
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

const icons = {
  faGithub,
  faTwitter,
  faMedium,
  faDev,
  faGoodreads,
  faPatreon,
  faHashtag,
  faMugHot,
  faEnvelope,
};

export default (icon) => {
  if (typeof icons[icon] !== "undefined") {
    return React.createElement(FontAwesomeIcon, { icon: icons[icon] });
  }
};
