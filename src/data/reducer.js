import { ACTION_TYPES, UNITS_TYPE } from "data/constants";
import { convertWeatherDataValues } from "utils/weather";

export const INITIAL_STATE = {
  isLoading: false,
  error: null,
  success: false,
  weatherData: null,
  unitsType: UNITS_TYPE.METRIC,
};

const {
  GET_WEATHER_DATA_REQUEST,
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_ERROR,
  GEOLOCATION_ERROR,
  SWITCH_UNITS_TYPE,
} = ACTION_TYPES;

export const weatherReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WEATHER_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: true,
        weatherData: payload,
      };
    case SWITCH_UNITS_TYPE:
      return {
        ...state,
        weatherData: convertWeatherDataValues(payload, state),
        unitsType: payload,
      };
    case GET_WEATHER_DATA_ERROR:
    case GEOLOCATION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        success: false,
        weatherData: null,
      };
    default:
      throw new Error(`Unknown Service State: ${type}`);
  }
};
