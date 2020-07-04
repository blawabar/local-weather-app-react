import React, { useContext, useEffect } from "react";

import "./WeatherEngine.scss";

import { useHeartBeat } from "hooks";
import { WeatherScreen, LoadingScreen, ErrorScreen } from "components";

import { WeatherContext } from "data/context";

export const WeatherEngine = () => {
  const {
    state: { isLoading, error, success },
    actions: { getWeatherData },
  } = useContext(WeatherContext);

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useHeartBeat(15, getWeatherData);

  let content = <LoadingScreen message={"Getting user coordinates..."} />;

  if (isLoading) {
    content = <LoadingScreen />;
  } else if (error) {
    content = <ErrorScreen error={error.toString()} />;
  } else if (success) {
    content = <WeatherScreen />;
  }

  return <div className="weather-engine">{content}</div>;
};
