import { UNITS_TYPE, SERVICE_ACTION_TYPE } from "data/constants";

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

export const switchUnitsType = (state) => (dispatch) => {
  return () =>
    dispatch({
      type: SERVICE_ACTION_TYPE.SWITCH_UNITS_TYPE,
      payload:
        state.unitsType === UNITS_TYPE.METRIC
          ? UNITS_TYPE.IMPERIAL
          : UNITS_TYPE.METRIC,
    });
};
