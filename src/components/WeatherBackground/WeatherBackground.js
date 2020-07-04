import React, { useContext } from "react";

import PropTypes from "prop-types";

import "./WeatherBackground.scss";

import { WeatherContext } from "data/context";
import { WEATHER_ICON_TO_CLASS_MAP } from "data/constants";

export const WeatherBackground = ({ children }) => {
  const {
    state: {
      weatherData: {
        description: { icon },
      },
    },
  } = useContext(WeatherContext);

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

WeatherBackground.propTypes = { children: PropTypes.element.isRequired };
