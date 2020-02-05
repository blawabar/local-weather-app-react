import React from "react";

import "./WeatherScreen.scss";

import WeatherBackground from "./WeatherBackground";
import WeatherInfo from "./WeatherInfo";

const WeatherScreen = ({ weatherData }) => {
  const [{ icon }] = weatherData.weather;

  const content = (
    <div className="weather-screen">
      <WeatherBackground type={icon}>
        <WeatherInfo weatherData={weatherData} />
      </WeatherBackground>
    </div>
  );

  return content;
};

export default WeatherScreen;
