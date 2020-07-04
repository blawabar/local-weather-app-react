import React from "react";

import "./App.scss";

import { WeatherProvider } from "data/context";
import { WeatherEngine, Footer, ErrorBoundary } from "components";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <WeatherProvider>
          <WeatherEngine />
        </WeatherProvider>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
