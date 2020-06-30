import React from "react";

import "./Temperature.scss";

import { UNITS_TYPE } from "data/constants";

export const Temperature = ({ tempValue, unitsType }) => {
  const value =
    unitsType === UNITS_TYPE.METRIC
      ? tempValue.toFixed(1)
      : (tempValue * 1.8 + 32.0).toFixed(1);

  const modifier = `temperature--is-${
    unitsType === UNITS_TYPE.METRIC ? "celsius" : "fahrenheit"
  }`;

  return <h3 className={`temperature ${modifier}`}>{value}</h3>;
};
