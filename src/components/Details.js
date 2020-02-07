import React, { useContext } from "react";

import "./Details.scss";

import WeatherContext from "../contexts/WeatherContext";
import UnitsContext from "../contexts/UnitsContext";

const Details = () => {
  const { main, wind } = useContext(WeatherContext);
  const units = useContext(UnitsContext);

  const render = () => {
    const data = [
      {
        category: "wind",
        title: "Wind speed",
        value:
          units === "METRIC" ? wind.speed : (wind.speed * 2.237).toFixed(1),
        units: units === "METRIC" ? "m/s" : "mph"
      },
      {
        category: "pressure",
        title: "Air pressure",
        value: main.pressure,
        units: "hPa"
      },
      {
        category: "humidity",
        title: "Humidity",
        value: main.humidity,
        units: "%"
      }
    ];

    const details = data.map((item, index) => {
      const { category, title, value, units } = item;

      return (
        <div key={index} className={`details__${category}`}>
          <p className="details__title">{title}</p>
          <p className="details__value">{`${value} ${units}`}</p>
        </div>
      );
    });

    return <section className="details">{details}</section>;
  };

  return render();
};

export default Details;
