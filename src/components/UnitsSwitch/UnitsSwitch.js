import React, { useRef } from "react";

import PropTypes from "prop-types";

import "./UnitsSwitch.scss";

import { UNITS_TYPE } from "data/constants";

export const UnitsSwitch = ({ onUnitsChange, unitsType }) => {
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
    <div className="units-switch" onClick={onUnitsChange}>
      <div className={coverClassName}></div>
      {switchValues}
    </div>
  );
};

UnitsSwitch.propTypes = {
  onUnitsChange: PropTypes.func.isRequired,
  unitsType: PropTypes.string.isRequired,
};
