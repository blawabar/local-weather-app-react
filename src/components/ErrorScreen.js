import React from "react";

import "./ErrorScreen.scss";

const ErrorScreen = error => {
  return (
    <div className="error-screen">
      <h1 className="error-screen__title"> An error has occured: {error}</h1>
    </div>
  );
};

export default ErrorScreen;
