import React, { useContext } from "react";

import "./WeatherInfo.scss";

import {
  UnitsSwitch,
  Location,
  Temperature,
  Description,
  Details,
} from "components";
import { WeatherContext } from "data/context";

export const WeatherInfo = () => {
  const { weatherData, switchUnitsType, unitsType } = useContext(
    WeatherContext
  );

  const { description, details, location, temp } = weatherData;

  return (
    <div className="weather-info">
      <UnitsSwitch onUnitsChange={switchUnitsType} unitsType={unitsType} />
      <Location locationData={location} />
      <Temperature tempValue={temp} unitsType={unitsType} />
      <Description descData={description} />
      <Details detailsData={details} unitsType={unitsType} />
    </div>
  );
};
