import React from "react";

import "./Details.scss";

import { UNITS_TYPE } from "app-constants";

export const Details = ({
  detailsData: { windSpeed, pressure, humidity },
  unitsType,
}) => {
  const data = [
    {
      category: "wind",
      title: "Wind speed",
      value:
        unitsType === UNITS_TYPE.METRIC
          ? windSpeed
          : (windSpeed * 2.237).toFixed(1),
      units: unitsType === UNITS_TYPE.METRIC ? "m/s" : "mph",
    },
    {
      category: "pressure",
      title: "Air pressure",
      value: pressure,
      units: "hPa",
    },
    {
      category: "humidity",
      title: "Humidity",
      value: humidity,
      units: "%",
    },
  ];

  const detailsStructure = data.map((item, index) => {
    const { category, title, value, units } = item;

    return (
      <div key={index} className={`details__${category}`}>
        <p className="details__title">{title}</p>
        <p className="details__value">{`${value} ${units}`}</p>
      </div>
    );
  });

  return <section className="details">{detailsStructure}</section>;
};
