import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../../assets/Api/WeatherApi";
import type { Weather } from "../../Types/WeatherType";

import "./Search.css";
import { favariteCityManager } from "../../assets/Utils/FavoriteManager";
import WeatherCard from "../Common/WeatherCard";

const Search: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const { data, isLoading, isError } = useQuery<Weather>({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생</p>;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCity(input.trim());
  };

  const handleAddFavorite = () => {
    if (city) {
      favariteCityManager.add(city);
      alert(`${city}를 즐겨찾기에 추가했습니다.`);
    }
  };

  return (
    <div className="search-page">
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="search-button" type="button" onClick={handleSubmit}>
          검색
        </button>
      </form>

      {/* {data && (
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
      )} */}
      {data && (
        <WeatherCard
          data={data}
          handleAddFavorite={() => handleAddFavorite()}
        />
      )}
    </div>
  );
};

export default Search;
