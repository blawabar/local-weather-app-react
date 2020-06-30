import React, { useState, useContext } from "react";

import "./WeatherInfo.scss";

import {
  UnitsSwitch,
  Location,
  Temperature,
  Description,
  Details,
} from "components";
import { UNITS_TYPE } from "data/constants";
import { WeatherContext } from "data/context";

export const WeatherInfo = () => {
  const [unitsType, setUnitsType] = useState(UNITS_TYPE.METRIC);
  const { description, details, location, temp } = useContext(WeatherContext);

  const handleUnitsChange = () =>
    unitsType === UNITS_TYPE.METRIC
      ? setUnitsType(UNITS_TYPE.IMPERIAL)
      : setUnitsType(UNITS_TYPE.METRIC);

  return (
    <div className="weather-info">
      <UnitsSwitch
        handleUnitsChange={handleUnitsChange}
        unitsType={unitsType}
      />
      <Location locationData={location} />
      <Temperature tempValue={temp} unitsType={unitsType} />
      <Description descData={description} />
      <Details detailsData={details} unitsType={unitsType} />
    </div>
  );
};
