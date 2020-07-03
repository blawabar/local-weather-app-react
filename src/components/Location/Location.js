import React from "react";

import PropTypes from "prop-types";

import "./Location.scss";

import { Calendar } from "components";

export const Location = ({ locationData }) => {
  return (
    <section className="location">
      <div className="location__city">{locationData}</div>
      <Calendar />
    </section>
  );
};

Location.propTypes = { locationData: PropTypes.string.isRequired };
