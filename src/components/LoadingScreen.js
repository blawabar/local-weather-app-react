import React from "react";

import "./LoadingScreen.scss";

const LoadingScreen = ({ message = "Loading Local Weather Data..." }) => {
  return (
    <div className="loading-screen">
      <h1 className="loading-screen__title">{message}</h1>
    </div>
  );
};

export default LoadingScreen;
