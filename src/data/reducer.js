import { SERVICE_ACTION_TYPE, UNITS_TYPE } from "data/constants";
import { convertWeatherDataValues } from "utils/weather";

export const INITIAL_STATE = {
  isLoading: false,
  weatherData: null,
  error: null,
  unitsType: UNITS_TYPE.METRIC,
};

const {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GEOLOCATION_ERROR,
  SWITCH_UNITS_TYPE,
} = SERVICE_ACTION_TYPE;

export const weatherReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_INIT:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, weatherData: payload, error: null };
    case SWITCH_UNITS_TYPE:
      return {
        ...state,
        unitsType: payload,
        weatherData: convertWeatherDataValues(payload, state),
      };
    case FETCH_ERROR:
    case GEOLOCATION_ERROR:
      return { ...state, isLoading: false, weatherData: null, error: payload };
    default:
      throw new Error(`Unknown Service State: ${type}`);
  }
};
