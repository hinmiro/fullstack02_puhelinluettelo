import fetchWeather from "../services/fetchWeather.js";
import { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon.jsx";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather.getWeather(country).then((weatherData) => {
      setWeather(weatherData);
    });
  }, []);

  if (!weather) {
    return;
  }

  return (
    <>
      <tr>
        <th>Weather in {country.capital[0]}</th>
      </tr>
      <tr>
        <td>
          <WeatherIcon iconCode={weather.weather[0].icon} />
        </td>
      </tr>
      <tr>
        <td>
          Temperature: {weather.main.temp}℃, feels like{" "}
          {weather.main.feels_like}℃
        </td>
      </tr>
      <tr>
        <td>Wind: {weather.wind.speed}ms</td>
      </tr>
    </>
  );
};

export default Weather;
