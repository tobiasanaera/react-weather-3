import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}
`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperature"></div>
          <span className="WeatherForecast-temperature-max">19</span>
          <span className="WeatherForecast-temperature-min">10</span>
        </div>
      </div>
    </div>
  );
}
