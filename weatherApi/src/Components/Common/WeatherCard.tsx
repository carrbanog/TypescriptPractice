import React from "react";
import type { Weather } from "../../Types/WeatherType";

interface WeatherCardProps {
  data: Weather;
  handleAddFavorite: () => void;
}

const WeatherCard = ({ data, handleAddFavorite }: WeatherCardProps) => {
  return (
    <div className="weather-card">
      <div className="weather-info">
        <h2>{data.name}의 현재 날씨</h2>
        <p>기온: {data.main.temp}°C</p>
        <p>체감 온도: {data.main.feels_like}°C</p>
        <p>습도: {data.main.humidity}%</p>
        <p>풍속: {data.wind.speed} m/s</p>
        <p>날씨: {data.weather[0].description}</p>
        <button className="add-favorite" onClick={handleAddFavorite}>
          즐겨찾기 추가
        </button>
      </div>
      <div className="weather-icon">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
