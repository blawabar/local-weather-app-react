export const WEATHER_ICON_TO_CLASS_MAP = Object.freeze({
  "01d": "clear-sky-d",
  "01n": "clear-sky-n",
  "02d": "few-clouds-d",
  "02n": "few-clouds-n",
  "03d": "scattered-clouds-d",
  "03n": "scattered-clouds-n",
  "04d": "broken-clouds-d",
  "04n": "broken-clouds-n",
  "09d": "shower-rain-d",
  "09n": "shower-rain-n",
  "10d": "rain-d",
  "10n": "rain-n",
  "11d": "thunderstorm-d",
  "11n": "thunderstorm-n",
  "13d": "snow-d",
  "13n": "snow-n",
  "50d": "mist",
});

const METRIC = "METRIC";
const IMPERIAL = "IMPERIAL";

export const UNITS_TYPE = Object.freeze({
  METRIC,
  IMPERIAL,
});

export const ACTION_TYPES = Object.freeze({
  GET_WEATHER_DATA_REQUEST: "GET_WEATHER_DATA_REQUEST",
  GET_WEATHER_DATA_SUCCESS: "GET_WEATHER_DATA_SUCCESS",
  GET_WEATHER_DATA_ERROR: "GET_WEATHER_DATA_ERROR",
  GEOLOCATION_ERROR: "GEOLOCATION_ERROR",
  SWITCH_UNITS_TYPE: "SWITCH_UNITS_TYPE",
});

export const API = "https://api.openweathermap.org/data/2.5/weather";
export const TOKEN = "086370e96396a4464fe97ec16a0f7381";
