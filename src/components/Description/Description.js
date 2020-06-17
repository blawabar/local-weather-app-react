import React, { useContext, useRef } from "react";

import "./Description.scss";

import { WeatherContext } from "contexts";

export const Description = () => {
  const weatherIconToClassMap = useRef({
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
    "50d": "mist",
  });

  const [{ icon, description }] = useContext(WeatherContext).weather;

  return (
    <section className="description">
      <p
        className={`description__icon description__icon--${weatherIconToClassMap.current[icon]}`}
      ></p>
      <p className="description__text">{description}</p>
    </section>
  );
};
