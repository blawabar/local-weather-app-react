import React from "react";

import "./WeatherEngine.scss";

import useWeatherService from "../hooks/useWeatherService";
import WeatherScreen from "./WeatherScreen";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";

const WeatherEngine = () => {
  const { isLoading, weatherData, error } = useWeatherService();

  let content = <LoadingScreen message={"Getting user coordinates..."} />;

  if (isLoading) {
    content = <LoadingScreen />;
  } else if (error) {
    content = <ErrorScreen error={error} />;
  } else if (weatherData) {
    content = <WeatherScreen weatherData={weatherData} />;
  }

  return <div className="weather-engine">{content}</div>;
};

export default WeatherEngine;
