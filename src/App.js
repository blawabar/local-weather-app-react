import React from "react";

import "./App.scss";

import { WeatherEngine, Footer, ErrorBoundary } from "components";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <WeatherEngine />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
