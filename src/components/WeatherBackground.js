import React from "react";

import "./WeatherBackground.scss";

const weatherIconToClassMap = {
  "01d": "clear-sky-d",
  "01n": "clear-sky-n",
  "02d": "few-clouds-d",
  "02n": "few-clouds-n",
  "03d": "scattered-clouds-d",
  "03n": "scattered-clouds-n",
  "04d": "broken-clouds-d",
  "04n": "broken-clouds-n",
  "09d": "shower-rain-d",
  "09n": "shower-rain-n",
  "10d": "rain-d",
  "10n": "rain-n",
  "11d": "thunderstorm-d",
  "11n": "thunderstorm-n",
  "13d": "snow-d",
  "13n": "snow-n",
  "50d": "mist"
};

const WeatherBackground = ({ type, children }) => {
  console.log({ type, children });
  const classType = weatherIconToClassMap[type];
  const className = classType
    ? `weather-background weather-background--${classType}`
    : "weather-background";
  return <div className={className}>{children}</div>;
};

export default WeatherBackground;
