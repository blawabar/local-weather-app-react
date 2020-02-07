import React, { useContext } from "react";

import "./Temperature.scss";

import WeatherContext from "../contexts/WeatherContext";
import UnitsContext from "../contexts/UnitsContext";

const Temperature = () => {
  const { temp } = useContext(WeatherContext).main;
  const unitsType = useContext(UnitsContext);

  const tempValue =
    unitsType === "METRIC" ? temp.toFixed(1) : (temp * 1.8 + 32.0).toFixed(1);

  const modifier = `temperature--is-${
    unitsType === "METRIC" ? "celsius" : "fahrenheit"
  }`;

  return <h3 className={`temperature ${modifier}`}>{tempValue}</h3>;
};

export default Temperature;
