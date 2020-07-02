import { SERVICE_ACTION_TYPE, UNITS_TYPE } from "data/constants";
import { convertWeatherDataValues } from "utils/weather";

export const INITIAL_STATE = {
  isLoading: false,
  weatherData: null,
  error: null,
  unitsType: UNITS_TYPE.METRIC,
};

export const weatherReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SERVICE_ACTION_TYPE.FETCH_INIT:
      return { ...state, isLoading: true };
    case SERVICE_ACTION_TYPE.FETCH_SUCCESS:
      return { ...state, isLoading: false, weatherData: payload, error: null };
    case SERVICE_ACTION_TYPE.SWITCH_UNITS_TYPE:
      return {
        ...state,
        unitsType: payload,
        weatherData: convertWeatherDataValues(payload, state),
      };
    case SERVICE_ACTION_TYPE.FETCH_ERROR:
    case SERVICE_ACTION_TYPE.GEOLOCATION_ERROR:
      return { ...state, isLoading: false, weatherData: null, error: payload };
    default:
      throw new Error(`Unknown Service State: ${type}`);
  }
};
