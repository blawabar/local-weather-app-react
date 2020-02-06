import React from "react";

import "./WeatherScreen.scss";

import WeatherBackground from "./WeatherBackground";
import WeatherInfo from "./WeatherInfo";

const WeatherScreen = () => {
  const content = (
    <div className="weather-screen">
      <WeatherBackground>
        <WeatherInfo />
      </WeatherBackground>
    </div>
  );

  return content;
};

export default WeatherScreen;
