import React, { useState, useEffect, useCallback, useRef } from "react";

import "./WeatherEngine.scss";

import { useWeatherService } from "hooks";
import { WeatherScreen, LoadingScreen, ErrorScreen } from "components";

import { WeatherContext } from "contexts";

export const WeatherEngine = () => {
  const setTimeIntervalValue = useCallback((nbrOfMinutes) => {
    if (typeof nbrOfMinutes === "number" && nbrOfMinutes > 0) {
      return nbrOfMinutes * 60 * 1000;
    } else {
      throw new Error(`nbrOfMinutes must be a number greater than zero!`);
    }
  }, []);

  const timeInterval = useRef(setTimeIntervalValue(15));
  const [stateSwitch, setStateSwitch] = useState(false);

  const updateStateSwitch = useCallback(() => {
    setStateSwitch(stateSwitch ? false : true);
  }, [stateSwitch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateStateSwitch();
    }, timeInterval.current);

    return () => {
      clearInterval(intervalId);
    };
  }, [updateStateSwitch]);

  const { isLoading, weatherData, error } = useWeatherService([stateSwitch]);

  let content = <LoadingScreen message={"Getting user coordinates..."} />;

  if (isLoading) {
    content = <LoadingScreen />;
  } else if (error) {
    content = <ErrorScreen error={error} />;
  } else if (weatherData) {
    content = (
      <WeatherContext.Provider value={weatherData}>
        <WeatherScreen />
      </WeatherContext.Provider>
    );
  }

  return <div className="weather-engine">{content}</div>;
};