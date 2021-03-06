import React from "react";

import PropTypes from "prop-types";

import "./ErrorScreen.scss";

export const ErrorScreen = ({ error }) => {
  return (
    <div className="error-screen">
      <h1 className="error-screen__title">An error has occured.</h1>
      <p className="error-screen__details">{error}</p>
    </div>
  );
};

ErrorScreen.propTypes = { error: PropTypes.string.isRequired };
