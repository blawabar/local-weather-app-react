import React, { useRef } from "react";

import "./UnitsSwitch.scss";
import { UNITS_TYPE } from "app-constants";

export const UnitsSwitch = ({ handleUnitsChange, unitsType }) => {
  const coverPrefix = useRef("units-switch__cover");
  const unitInfoPrefix = useRef("units-switch__unit-info");

  const coverClassName = `${coverPrefix.current} ${
    coverPrefix.current
  }--is-${unitsType.toLowerCase()}`;

  const setUnitInfoClassName = (typeName) =>
    unitsType === typeName
      ? `${unitInfoPrefix.current} ${unitInfoPrefix.current}--is-active`
      : unitInfoPrefix.current;

  const switchValues = [UNITS_TYPE.METRIC, UNITS_TYPE.IMPERIAL].map(
    (unitType, index) => (
      <p key={index} className={setUnitInfoClassName(unitType)}>
        {unitType.toLowerCase()}
      </p>
    )
  );

  return (
    <div className="units-switch" onClick={handleUnitsChange}>
      <div className={coverClassName}></div>
      {switchValues}
    </div>
  );
};
