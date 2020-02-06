import React, { useContext } from "react";

import "./Temperature.scss";

import WeatherContext from "../contexts/WeatherContext";

const Temperature = () => {
  const { temp } = useContext(WeatherContext).main;

  return (
    <h3 className="temperature temperature--is-celsius">{temp.toFixed(1)}</h3>
  );
};

export default Temperature;
