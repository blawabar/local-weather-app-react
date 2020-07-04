import React, { createContext, useReducer } from "react";

import PropTypes from "prop-types";

import { getWeatherData, switchUnitsType } from "data/actions";
import { INITIAL_STATE, weatherReducer } from "data/reducer";

export const WeatherContext = createContext({});

const { Provider } = WeatherContext;

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);

  return (
    <Provider
      value={{
        state,
        actions: {
          getWeatherData: getWeatherData(state, dispatch),
          switchUnitsType: switchUnitsType(state, dispatch),
        },
      }}
    >
      {children}
    </Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
