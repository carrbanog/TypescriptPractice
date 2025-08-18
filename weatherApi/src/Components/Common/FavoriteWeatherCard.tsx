import React from "react";
import type { Weather } from "../../Types/WeatherType";
import "./FavoriteWeatherCard.css";

interface FavoriteWeatherCardProps {
  FavoriteWeatherdata: Weather[];
}
const FavoriteWeatherCard: React.FC<FavoriteWeatherCardProps> = ({
  FavoriteWeatherdata,
}) => {
  return (
    <div className="favorite-weather-card">
      {FavoriteWeatherdata.map((data: Weather) => (
        <div className="favorite-weather-info" key={data.name}>
          <h2>{data.name}</h2>
          <p>기온: {data.main.temp}°C</p>
          <p>체감 온도: {data.main.feels_like}°C</p>
          <div className="favorite-weather-icon">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteWeatherCard;
