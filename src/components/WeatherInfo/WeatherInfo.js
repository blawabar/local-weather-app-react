import React, { useState } from "react";

import "./WeatherInfo.scss";

import {
  UnitsSwitch,
  Location,
  Temperature,
  Description,
  Details,
} from "components";

import { UnitsContext } from "contexts";

export const WeatherInfo = () => {
  const [unitsType, setUnitsType] = useState("METRIC");

  const handleUnitsChange = () =>
    unitsType === "METRIC" ? setUnitsType("IMPERIAL") : setUnitsType("METRIC");

  return (
    <div className="weather-info">
      <UnitsContext.Provider value={unitsType}>
        <UnitsSwitch handleUnitsChange={handleUnitsChange} />
        <Location />
        <Temperature />
        <Description />
        <Details />
      </UnitsContext.Provider>
    </div>
  );
};
