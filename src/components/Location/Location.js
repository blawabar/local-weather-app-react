import React from "react";

import "./Location.scss";

import { Calendar } from "components";

export const Location = ({ locationData }) => {
  return (
    <section className="location">
      <div className="location__city">{locationData}</div>
      <Calendar />
    </section>
  );
};
