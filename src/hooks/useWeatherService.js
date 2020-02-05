import { useEffect, useReducer } from "react";

class ServiceState {
  static FETCH_INIT = 0;
  static FETCH_SUCCESS = 1;
  static FETCH_ERROR = 2;
  static GEOLOCATION_ERROR = 3;
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
      return state;
  }
};

const API = "https://api.openweathermap.org/data/2.5/weather";
const TOKEN = "086370e96396a4464fe97ec16a0f7381";

const useWeatherService = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    isLoading: false,
    weatherData: null,
    error: null
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

    const getData = async ({ lat, lon }) => {
      const URL = `${API}?lat=${lat}&lon=${lon}&units=metric&APPID=${TOKEN}`;

      try {
        dispatch({ type: ServiceState.FETCH_INIT });
        const result = await fetch(URL, { signal });

        if (result.ok) {
          const data = await result.json();
          dispatch({ type: ServiceState.FETCH_SUCCESS, payload: data });
        } else {
          const error = await result.json();
          dispatch({ type: ServiceState.FETCH_ERROR, payload: error });
        }
      } catch (error) {
        dispatch({ type: ServiceState.FETCH_ERROR, payload: error });
      }
    };

    const trimCoord = coord => (coord ? parseFloat(coord.toFixed(2)) : 0.0);

    const extractCoords = position => {
      let result = { lat: 0.0, lon: 0.0 };

      if (position) {
        const { latitude, longitude } = position.coords;

        result = {
          lat: trimCoord(latitude),
          lon: trimCoord(longitude)
        };
      }

      return result;
    };

    const handleGetCoords = position => {
      getData({ ...extractCoords(position) });
    };

    const handleError = error => {
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
  }, []);

  return state;
};

export default useWeatherService;
