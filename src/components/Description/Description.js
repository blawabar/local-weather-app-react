import React from "react";

import PropTypes from "prop-types";

import "./Description.scss";

import { WEATHER_ICON_TO_CLASS_MAP } from "data/constants";

export const Description = ({ descData: { icon, text } }) => {
  return (
    <section className="description">
      <p
        className={`description__icon description__icon--${WEATHER_ICON_TO_CLASS_MAP[icon]}`}
      ></p>
      <p className="description__text">{text}</p>
    </section>
  );
};

Description.propTypes = {
  descData: PropTypes.exact({
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
