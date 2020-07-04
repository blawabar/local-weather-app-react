import { ACTION_TYPES, UNITS_TYPE } from "data/constants";

import {
  getCoords,
  extractCoords,
  handleGeolocationError,
} from "utils/geolocation";

import { fetchWeatherData } from "data/fetch";

export const getWeatherData = (state, dispatch) => () => {
  const { weatherData } = state;

  if (!weatherData) {
    getCoords(
      (position) => {
        fetchWeatherData(extractCoords(position), dispatch);
      },
      (error) => handleGeolocationError(error, dispatch)
    );
  } else {
    fetchWeatherData(weatherData.coord, dispatch);
  }
};

export const switchUnitsType = (state, dispatch) => () => {
  dispatch({
    type: ACTION_TYPES.SWITCH_UNITS_TYPE,
    payload:
      state.unitsType === UNITS_TYPE.METRIC
        ? UNITS_TYPE.IMPERIAL
        : UNITS_TYPE.METRIC,
  });
};
