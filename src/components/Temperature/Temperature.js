import React from "react";

import "./Temperature.scss";

import { UNITS_TYPE } from "data/constants";

export const Temperature = ({ tempValue, unitsType }) => {
  const modifier = `temperature--is-${
    unitsType === UNITS_TYPE.METRIC ? "celsius" : "fahrenheit"
  }`;

  return <h3 className={`temperature ${modifier}`}>{tempValue}</h3>;
};
