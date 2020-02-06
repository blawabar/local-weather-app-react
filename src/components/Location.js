import React, { useContext } from "react";

import "./Location.scss";

import Calendar from "./Calendar";

import WeatherContext from "../contexts/WeatherContext";

const Location = () => {
  const { name, sys } = useContext(WeatherContext);

  return (
    <section className="location">
      <div className="location__city">{`${name}, ${sys.country}`}</div>
      <Calendar />
    </section>
  );
};

export default Location;
