import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../../assets/Api/WeatherApi";
import "./Search.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  // const city = "daegu";
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input.trim());
  };

  console.log(data);
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

      {data && (
        <div className="weather-card">
          <h2>{data.name}의 현재 날씨</h2>
          <p>기온: {data.main.temp}°C</p>
          <p>체감 온도: {data.main.feels_like}°C</p>
          <p>습도: {data.main.humidity}%</p>
          <p>풍속: {data.wind.speed} m/s</p>
          <p>날씨: {data.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default Search;
