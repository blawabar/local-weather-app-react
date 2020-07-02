import React from "react";

import "./WeatherScreen.scss";

import { WeatherBackground, WeatherInfo } from "components";

export const WeatherScreen = () => {
  const content = (
    <div className="weather-screen">
      <WeatherBackground>
        <WeatherInfo />
      </WeatherBackground>
    </div>
  );

  return content;
};
