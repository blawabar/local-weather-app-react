import React, { useContext } from "react";

import "./Temperature.scss";

import { UnitsContext } from "contexts";

export const Temperature = ({ tempValue }) => {
  const unitsType = useContext(UnitsContext);

  const value =
    unitsType === "METRIC"
      ? tempValue.toFixed(1)
      : (tempValue * 1.8 + 32.0).toFixed(1);

  const modifier = `temperature--is-${
    unitsType === "METRIC" ? "celsius" : "fahrenheit"
  }`;

  return <h3 className={`temperature ${modifier}`}>{value}</h3>;
};
