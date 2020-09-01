import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import { Icon } from "../Icon";

export const SocialNetworks = ({ className, children }) => {
  return (
    <div className={`text-center ${className}`}>
      <Icon href="#">
        <FontAwesomeIcon icon={faFacebookF} />
      </Icon>
      <Icon href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
      <Icon href="#">
        <FontAwesomeIcon icon={faWhatsapp} />
      </Icon>
      <Icon href="#">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
    </div>
  );
};
