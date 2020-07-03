import React from "react";

import PropTypes from "prop-types";

import "./Temperature.scss";

import { UNITS_TYPE } from "data/constants";

export const Temperature = ({ tempValue, unitsType }) => {
  const modifier = `temperature--is-${
    unitsType === UNITS_TYPE.METRIC ? "celsius" : "fahrenheit"
  }`;

  return <h3 className={`temperature ${modifier}`}>{tempValue}</h3>;
};

Temperature.propTypes = {
  tempValue: PropTypes.number.isRequired,
  unitsType: PropTypes.string.isRequired,
};
