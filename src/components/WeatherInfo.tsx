import React from "react";
import { WeatherData } from "../App";

interface WeatherInfoProps {
  weather: WeatherData;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
  // You can use icons from OpenWeather's icon set:
  // https://openweathermap.org/weather-conditions
  const iconUrl = `https://openweathermap.org/img/wn/10d@2x.png`;

  return (
    <div className="weather-card">
      <h2>{weather.location}</h2>
      <img src={iconUrl} alt="weather icon" />
      <p className="temp">{weather.temperature}°C</p>
      <p className="desc">{weather.description}</p>
    </div>
  );
};

export default WeatherInfo;
