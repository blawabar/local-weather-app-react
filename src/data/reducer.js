import { SERVICE_ACTION_TYPE } from "data/constants";

export const INITIAL_STATE = {
  isLoading: false,
  weatherData: null,
  error: null,
};

export const weatherReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SERVICE_ACTION_TYPE.FETCH_INIT:
      return { ...state, isLoading: true };
    case SERVICE_ACTION_TYPE.FETCH_SUCCESS:
      return { isLoading: false, weatherData: payload, error: null };
    case SERVICE_ACTION_TYPE.FETCH_ERROR:
    case SERVICE_ACTION_TYPE.GEOLOCATION_ERROR:
      return { isLoading: false, weatherData: null, error: payload };
    default:
      throw new Error(`Unknown Service State: ${type}`);
  }
};
