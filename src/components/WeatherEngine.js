import React from "react";

import "./WeatherEngine.scss";

import useWeatherService from "../hooks/useWeatherService";
import WeatherBackground from "./WeatherBackground";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";

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

const weatherModel = {
  weatherIcon: "",
  cityName: "",
  countryCode: "",
  tempValue: 0,
  pressValue: 0,
  humidValue: 0,
  windDir: 0,
  windSpeed: 0
};

const LocalWeatherEngine = () => {
  const { isLoading, weatherData, error } = useWeatherService();

  let content = null;

  if (isLoading) {
    content = <LoadingScreen />;
  } else if (error) {
    content = <ErrorScreen error={error} />;
  } else if (weatherData) {
    const { weather, main, wind, sys, name } = weatherData;

    const [{ icon, description }] = weather;
    const { temp, pressure, humidity } = main;

    content = (
      <WeatherBackground type={icon}>
        <div className="weather-engine">
          <section className="weather-engine__location">
            <div className="weather-engine__city">{`${name}, ${sys.country}`}</div>
            <div className="weather-engine__calendar">20:24 Mon, 3 Feb'20</div>
          </section>
          <h3 className="weather-engine__temperature weather-engine__temperature--is-celsius">
            {temp.toFixed(1)}
          </h3>
          <section className="weather-engine__description">
            <p
              className={`weather-engine__icon weather-engine__icon--${weatherIconToClassMap[icon]}`}
            ></p>
            <p className="weather-engine__text">{description}</p>
          </section>
          <section className="weather-engine__details">
            <div className="weather-engine__wind">
              <p className="weather-engine__title">Wind speed</p>
              <p className="weather-engine__value">{`${wind.speed} m/s`}</p>
            </div>
            <div className="weather-engine__pressure">
              <p className="weather-engine__title">Air pressure</p>
              <p className="weather-engine__value">{`${pressure} hPa`}</p>
            </div>
            <div className="weather-engine__humidity">
              <p className="weather-engine__title">Humidity</p>
              <p className="weather-engine__value">{`${humidity} %`}</p>
            </div>
          </section>
        </div>
      </WeatherBackground>
    );
  }

  return content;
};

export default LocalWeatherEngine;
