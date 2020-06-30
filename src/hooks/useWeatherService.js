import { useEffect, useReducer, useRef } from "react";

import { normalizeWeatherData } from "utils";

class ServiceState {
  static FETCH_INIT = "FETCH_INIT";
  static FETCH_SUCCESS = "FETCH_SUCCESS";
  static FETCH_ERROR = "FETCH_ERROR";
  static GEOLOCATION_ERROR = "GEOLOCATION_ERROR";
}

const reducerFunction = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ServiceState.FETCH_INIT:
      return { ...state, isLoading: true };
    case ServiceState.FETCH_SUCCESS:
      return { ...state, isLoading: false, weatherData: payload, error: null };
    case ServiceState.FETCH_ERROR:
    case ServiceState.GEOLOCATION_ERROR:
      return { ...state, isLoading: false, weatherData: null, error: payload };
    default:
      throw new Error(`Unknown Service State: ${type}`);
  }
};

export const useWeatherService = (deps) => {
  const API = useRef("https://api.openweathermap.org/data/2.5/weather");
  const TOKEN = useRef("086370e96396a4464fe97ec16a0f7381");

  const [state, dispatch] = useReducer(reducerFunction, {
    isLoading: false,
    weatherData: null,
    error: null,
  });

  useEffect(() => {
    const getCoords = (onGetCoords, onError) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGetCoords, onError);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    const aborController = new AbortController();
    const signal = aborController.signal;

    const getWeatherData = async ({ lat, lon }) => {
      const URL = `${API.current}?lat=${lat}&lon=${lon}&units=metric&APPID=${TOKEN.current}`;

      try {
        dispatch({ type: ServiceState.FETCH_INIT });
        const result = await fetch(URL, { signal });

        if (result.ok) {
          const data = await result.json();

          dispatch({
            type: ServiceState.FETCH_SUCCESS,
            payload: normalizeWeatherData(data),
          });
        } else {
          const error = await result.json();
          dispatch({ type: ServiceState.FETCH_ERROR, payload: error });
        }
      } catch (error) {
        dispatch({ type: ServiceState.FETCH_ERROR, payload: error });
      }
    };

    const trimCoord = (coord) => (coord ? parseFloat(coord.toFixed(2)) : 0.0);

    const extractCoords = (position) => {
      let result = { lat: 0.0, lon: 0.0 };

      if (position) {
        const { latitude, longitude } = position.coords;

        result = {
          lat: trimCoord(latitude),
          lon: trimCoord(longitude),
        };
      }

      return result;
    };

    const handleGetCoords = (position) => {
      getWeatherData({ ...extractCoords(position) });
    };

    const handleError = (error) => {
      let msg = "An unknown Geolocation related error occurred.";

      switch (error.code) {
        case error.PERMISSION_DENIED:
          msg = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          msg = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          msg = "The request to get user location timed out.";
          break;
        case error.UNKNOWN_ERROR:
        default:
          break;
      }

      dispatch({ type: ServiceState.GEOLOCATION_ERROR, payload: msg });
    };

    getCoords(handleGetCoords, handleError);

    return () => aborController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
};
