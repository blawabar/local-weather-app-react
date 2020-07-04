import { ACTION_TYPES, API, TOKEN } from "data/constants";
import { normalizeWeatherData } from "utils/weather";

const {
  GET_WEATHER_DATA_REQUEST,
  GET_WEATHER_DATA_ERROR,
  GET_WEATHER_DATA_SUCCESS,
} = ACTION_TYPES;

export const fetchWeatherData = async (coord, dispatch) => {
  const { lat, lon } = coord;
  const URL = `${API}?lat=${lat}&lon=${lon}&units=metric&APPID=${TOKEN}`;

  try {
    dispatch({ type: GET_WEATHER_DATA_REQUEST });
    const result = await fetch(URL);

    if (result.ok) {
      const data = await result.json();

      dispatch({
        type: GET_WEATHER_DATA_SUCCESS,
        payload: normalizeWeatherData(data),
      });
    } else {
      const { cod, message } = await result.json();
      dispatch({
        type: GET_WEATHER_DATA_ERROR,
        payload: `Fetch error - code: ${cod}, message: ${message}`,
      });
    }
  } catch (error) {
    dispatch({ type: GET_WEATHER_DATA_ERROR, payload: error });
  }
};
