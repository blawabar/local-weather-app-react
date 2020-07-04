import { UNITS_TYPE, ACTION_TYPES, API, TOKEN } from "data/constants";

const {
  GET_WEATHER_DATA_REQUEST,
  GET_WEATHER_DATA_ERROR,
  GET_WEATHER_DATA_SUCCESS,
} = ACTION_TYPES;

const trimNumericValue = (value) => parseFloat(value.toFixed(1));

export const normalizeWeatherData = (weatherData) => {
  if (!weatherData || typeof weatherData !== "object") {
    throw new Error("Improper type of weather data!");
  }

  const {
    coord,
    weather: [{ description, icon }],
    main: { temp, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = weatherData;

  return {
    coord,
    location: `${name}, ${country}`,
    temp: trimNumericValue(temp),
    description: {
      text: description,
      icon,
    },
    details: {
      windSpeed: trimNumericValue(speed),
      pressure,
      humidity,
    },
  };
};

export const convertWeatherDataValues = (unitsType, state) => {
  const { weatherData } = state;
  const {
    details: { windSpeed },
    temp,
  } = weatherData;

  const convertedTemperature = trimNumericValue(
    unitsType === UNITS_TYPE.METRIC ? ((temp - 32) * 5) / 9 : temp * 1.8 + 32.0
  );

  const convertedWindSpeed = trimNumericValue(
    unitsType === UNITS_TYPE.METRIC ? windSpeed * 0.447 : windSpeed * 2.237
  );

  return {
    ...weatherData,
    temp: convertedTemperature,
    details: { ...weatherData.details, windSpeed: convertedWindSpeed },
  };
};

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
