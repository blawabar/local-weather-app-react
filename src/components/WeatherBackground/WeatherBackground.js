import React, { useContext } from "react";

import "./WeatherBackground.scss";

import { WeatherContext } from "contexts";
import { WEATHER_ICON_TO_CLASS_MAP } from "app-constants";

export const WeatherBackground = ({ children }) => {
  const { icon } = useContext(WeatherContext).description;

  const classType = WEATHER_ICON_TO_CLASS_MAP[icon];

  const className = classType
    ? `weather-background weather-background--${classType}`
    : "weather-background";
  return (
    <div className={className}>
      <div className="weather-background__glass-pane">{children}</div>
    </div>
  );
};
