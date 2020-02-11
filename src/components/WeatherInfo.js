import React, { useState } from "react";

import "./WeatherInfo.scss";

import UnitsSwitch from "./UnitsSwitch";
import Location from "./Location";
import Temperature from "./Temperature";
import Description from "./Description";
import Details from "./Details";

import UnitsContext from "../contexts/UnitsContext";

const WeatherInfo = () => {
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

export default WeatherInfo;
