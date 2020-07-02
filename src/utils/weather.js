import { UNITS_TYPE, SERVICE_ACTION_TYPE } from "data/constants";

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
    temp,
    description: {
      text: description,
      icon,
    },
    details: {
      windSpeed: speed,
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

  const convertedTemperature = parseFloat(
    (unitsType === UNITS_TYPE.METRIC
      ? ((temp - 32) * 5) / 9
      : temp * 1.8 + 32.0
    ).toFixed(1)
  );

  const convertedWindSpeed = parseFloat(
    (unitsType === UNITS_TYPE.METRIC
      ? windSpeed * 0.447
      : windSpeed * 2.237
    ).toFixed(1)
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
