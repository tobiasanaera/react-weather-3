import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Regina Thomson and is{" "}
          <a
            href="https://github.com/tobiasanaera/react-weather-3"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="https://master--frolicking-meringue-baf4a9.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
