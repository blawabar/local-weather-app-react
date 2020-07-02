import React from "react";

import "./WeatherScreen.scss";

import { WeatherBackground, WeatherInfo, ErrorBoundary } from "components";

export const WeatherScreen = () => {
  const content = (
    <div className="weather-screen">
      <WeatherBackground>
        <ErrorBoundary>
          <WeatherInfo />
        </ErrorBoundary>
      </WeatherBackground>
    </div>
  );

  return content;
};
