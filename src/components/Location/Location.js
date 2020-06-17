import React, { useContext } from "react";

import "./Location.scss";

import { Calendar } from "components";

import { WeatherContext } from "contexts";

export const Location = () => {
  const { name, sys } = useContext(WeatherContext);

  return (
    <section className="location">
      <div className="location__city">{`${name}, ${sys.country}`}</div>
      <Calendar />
    </section>
  );
};
