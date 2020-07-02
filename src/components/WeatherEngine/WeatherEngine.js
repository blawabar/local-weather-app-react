import React from "react";

import "./WeatherEngine.scss";

import { useWeatherService, useHeartBeat } from "hooks";
import { WeatherScreen, LoadingScreen, ErrorScreen } from "components";

import { WeatherContext } from "data/context";

export const WeatherEngine = () => {
  const heartBeat = useHeartBeat(15);

  const { state, switchUnitsType } = useWeatherService([heartBeat]);
  const { isLoading, error, weatherData, unitsType } = state;

  let content = <LoadingScreen message={"Getting user coordinates..."} />;

  if (isLoading) {
    content = <LoadingScreen />;
  } else if (error) {
    content = <ErrorScreen error={error.toString()} />;
  } else if (weatherData) {
    content = (
      <WeatherContext.Provider
        value={{ weatherData, unitsType, switchUnitsType }}
      >
        <WeatherScreen />
      </WeatherContext.Provider>
    );
  }

  return <div className="weather-engine">{content}</div>;
};
