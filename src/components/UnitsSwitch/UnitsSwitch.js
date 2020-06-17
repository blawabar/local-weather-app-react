import React, { useContext, useRef } from "react";

import "./UnitsSwitch.scss";

import { UnitsContext } from "contexts";

export const UnitsSwitch = ({ handleUnitsChange }) => {
  const unitsType = useContext(UnitsContext);
  const coverPrefix = useRef("units-switch__cover");
  const unitInfoPrefix = useRef("units-switch__unit-info");

  const coverClassName = `${coverPrefix.current} ${
    coverPrefix.current
  }--is-${unitsType.toLowerCase()}`;

  const setUnitInfoClassName = (typeName) =>
    unitsType === typeName
      ? `${unitInfoPrefix.current} ${unitInfoPrefix.current}--is-active`
      : unitInfoPrefix.current;

  return (
    <div className="units-switch" onClick={handleUnitsChange}>
      <div className={coverClassName}></div>
      <p className={setUnitInfoClassName("METRIC")}>metric</p>
      <p className={setUnitInfoClassName("IMPERIAL")}>imperial</p>
    </div>
  );
};
