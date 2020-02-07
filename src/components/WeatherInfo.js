import React, { useState } from "react";

import "./WeatherInfo.scss";

import Location from "./Location";
import Temperature from "./Temperature";
import Description from "./Description";
import Details from "./Details";

import UnitsContext from "../contexts/UnitsContext";

const WeatherInfo = () => {
  const [unitsType, setUnitsType] = useState("METRIC");

  const handleUnitsChange = () =>
    unitsType === "METRIC" ? setUnitsType("IMPERIAL") : setUnitsType("METRIC");

  const UnitsSwitch = () => {
    return (
      <button
        style={{
          position: "absolute",
          top: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75px",
          margin: "0 auto",
          padding: "0 10px",
          background: "transparent",
          border: "2px solid var(--secondary-text-color)",
          borderRadius: "15px",
          fontFamily: "Open Sans",
          fontSize: "10px",
          fontWeight: "700",
          color: "var(--secondary-text-color)",
          lineHeight: "1.75",
          letterSpacing: "1px",
          outline: "none",
          cursor: "pointer"
        }}
        onClick={handleUnitsChange}
      >
        {unitsType}
      </button>
    );
  };

  return (
    <div className="weather-info">
      <UnitsSwitch />
      <UnitsContext.Provider value={unitsType}>
        <Location />
        <Temperature />
        <Description />
        <Details />
      </UnitsContext.Provider>
    </div>
  );
};

export default WeatherInfo;
