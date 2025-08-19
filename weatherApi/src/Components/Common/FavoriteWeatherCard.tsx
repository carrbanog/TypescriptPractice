import React from "react";
import type { Weather } from "../../Types/WeatherType";
import "./FavoriteWeatherCard.css";

import { MdDelete } from "react-icons/md";
import { favariteCityManager } from "../../assets/Utils/FavoriteManager";

interface FavoriteWeatherCardProps {
  FavoriteWeatherdata: Weather[];
  onRemove: (city: string) => void;
}
const FavoriteWeatherCard: React.FC<FavoriteWeatherCardProps> = ({
  FavoriteWeatherdata,
  onRemove,
}) => {
  console.log(FavoriteWeatherdata[0].name);
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
          <button className="delete" onClick={() => onRemove(data.name)}>
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoriteWeatherCard;
