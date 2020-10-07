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
  faLongArrowAltLeft,
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
  faLongArrowAltLeft,
};

export default (icon) => {
  if (typeof icons[icon] !== "undefined") {
    return React.createElement(FontAwesomeIcon, { icon: icons[icon] });
  }

  // In case the icon wasn't found, notify with a message.
  return React.createElement(() => (
    <p>The icon {icon} hasn't been added to the store.</p>
  ));
};
