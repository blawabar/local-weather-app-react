import React from "react";

import "./WeatherInfo.scss";

import Location from "./Location";
import Temperature from "./Temperature";
import Description from "./Description";
import Details from "./Details";

const WeatherInfo = () => {
  const content = (
    <div className="weather-info">
      <Location />
      <Temperature />
      <Description />
      <Details />
    </div>
  );

  return content;
};

export default WeatherInfo;
