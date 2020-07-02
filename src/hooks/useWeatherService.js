import { useEffect, useReducer, useRef } from "react";

import {
  getCoords,
  extractCoords,
  handleGeolocationError,
} from "utils/geolocation";
import { normalizeWeatherData, switchUnitsType } from "utils/weather";

import { SERVICE_ACTION_TYPE } from "data/constants";
import { weatherReducer, INITIAL_STATE } from "data/reducer";

export const useWeatherService = (deps) => {
  const API = useRef("https://api.openweathermap.org/data/2.5/weather");
  const TOKEN = useRef("086370e96396a4464fe97ec16a0f7381");

  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);

  useEffect(() => {
    const aborController = new AbortController();
    const signal = aborController.signal;

    const getWeatherData = async ({ lat, lon }) => {
      const URL = `${API.current}?lat=${lat}&lon=${lon}&units=metric&APPID=${TOKEN.current}`;

      try {
        dispatch({ type: SERVICE_ACTION_TYPE.FETCH_INIT });
        const result = await fetch(URL, { signal });

        if (result.ok) {
          const data = await result.json();

          dispatch({
            type: SERVICE_ACTION_TYPE.FETCH_SUCCESS,
            payload: normalizeWeatherData(data),
          });
        } else {
          const error = await result.json();
          dispatch({ type: SERVICE_ACTION_TYPE.FETCH_ERROR, payload: error });
        }
      } catch (error) {
        dispatch({ type: SERVICE_ACTION_TYPE.FETCH_ERROR, payload: error });
      }
    };

    getCoords(
      (position) => {
        getWeatherData({ ...extractCoords(position) });
      },
      (error) => handleGeolocationError(error, dispatch)
    );

    return () => aborController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { state, switchUnitsType: switchUnitsType(state)(dispatch) };
};
