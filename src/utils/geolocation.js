import { SERVICE_ACTION_TYPE } from "data/constants";

export const getCoords = (onGetCoords, onError) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGetCoords, onError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

const trimCoord = (coord) => (coord ? parseFloat(coord.toFixed(2)) : 0.0);

export const extractCoords = (position) => {
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

export const handleGeolocationError = (error, dispatch) => {
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

  dispatch({ type: SERVICE_ACTION_TYPE.GEOLOCATION_ERROR, payload: msg });
};
