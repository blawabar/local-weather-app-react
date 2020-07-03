import React from "react";

import PropTypes from "prop-types";

import "./LoadingScreen.scss";

export const LoadingScreen = ({
  message = "Loading Local Weather Data...",
}) => {
  return (
    <div className="loading-screen">
      <h1 className="loading-screen__title">{message}</h1>
    </div>
  );
};

LoadingScreen.propTypes = { message: PropTypes.string };
