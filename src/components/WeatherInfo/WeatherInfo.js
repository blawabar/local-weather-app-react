import React, { useState, useContext } from "react";

import "./WeatherInfo.scss";

import {
  UnitsSwitch,
  Location,
  Temperature,
  Description,
  Details,
} from "components";

import { UnitsContext, WeatherContext } from "contexts";

export const WeatherInfo = () => {
  const [unitsType, setUnitsType] = useState("METRIC");
  const { description, details, location, temp } = useContext(WeatherContext);

  const handleUnitsChange = () =>
    unitsType === "METRIC" ? setUnitsType("IMPERIAL") : setUnitsType("METRIC");

  return (
    <div className="weather-info">
      <UnitsContext.Provider value={unitsType}>
        <UnitsSwitch handleUnitsChange={handleUnitsChange} />
        <Location locationData={location} />
        <Temperature tempValue={temp} />
        <Description descData={description} />
        <Details detailsData={details} />
      </UnitsContext.Provider>
    </div>
  );
};
