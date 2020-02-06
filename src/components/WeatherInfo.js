import React from "react";

import "./WeatherInfo.scss";

import Calendar from "./Calendar";

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

const WeatherInfo = ({ weatherData }) => {
  const { weather, main, wind, sys, name } = weatherData;

  const [{ icon, description }] = weather;
  const { temp, pressure, humidity } = main;

  const content = (
    <div className="weather-info">
      <section className="weather-info__location">
        <div className="weather-info__city">{`${name}, ${sys.country}`}</div>
        <Calendar />
      </section>
      {/* Thermometer ===> */}
      <h3 className="weather-info__temperature weather-info__temperature--is-celsius">
        {temp.toFixed(1)}
      </h3>
      {/* Thermometer <=== */}
      <section className="weather-info__description">
        <p
          className={`weather-info__icon weather-info__icon--${weatherIconToClassMap[icon]}`}
        ></p>
        <p className="weather-info__text">{description}</p>
      </section>
      <section className="weather-info__details">
        <div className="weather-info__wind">
          <p className="weather-info__title">Wind speed</p>
          <p className="weather-info__value">{`${wind.speed} m/s`}</p>
        </div>
        <div className="weather-info__pressure">
          <p className="weather-info__title">Air pressure</p>
          <p className="weather-info__value">{`${pressure} hPa`}</p>
        </div>
        <div className="weather-info__humidity">
          <p className="weather-info__title">Humidity</p>
          <p className="weather-info__value">{`${humidity} %`}</p>
        </div>
      </section>
    </div>
  );

  return content;
};

export default WeatherInfo;
