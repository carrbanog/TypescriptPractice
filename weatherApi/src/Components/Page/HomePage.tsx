import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getWeatherApi } from "../../assets/Api/WeatherApi";
import WeatherCard from "../Common/WeatherCard";
import WeatherGraphDraw from "../Common/WeatherGraphDraw";
import { favariteCityManager } from "../../assets/Utils/FavoriteManager";
import "./HomePage.css";

const HomePage = () => {
  const city = "seoul";

  const {
    data: current,
    isLoading: currentLoading,
    isError: currentError,
    error: currentErrObj,
  } = useQuery({
    queryKey: ["weather-current", city],
    queryFn: () => getWeatherApi.fetchWeather(city),
  });

  const {
    data: weekly,
    isLoading: weeklyLoading,
    isError: weeklyError,
    error: weeklyErrObj,
  } = useQuery({
    queryKey: ["weather-weekly", city],
    queryFn: () => getWeatherApi.fetchWeeklyWeather(city),
  });

  const handleAddFavorite = () => {
    favariteCityManager.add(city);
    alert(`${city}를 즐겨찾기에 추가했습니다.`);
  };

  if (currentLoading || weeklyLoading) {
    return <div className="container">로딩 중...</div>;
  }

  if (currentError) {
    return (
      <div className="container">
        현재 날씨 로딩 실패: {String(currentErrObj)}
      </div>
    );
  }

  if (weeklyError) {
    return (
      <div className="container">
        주간 예보 로딩 실패: {String(weeklyErrObj)}
      </div>
    );
  }

  if (!current || !weekly) {
    return <div className="container">데이터가 없습니다.</div>;
  }

  return (
    <div className="container home-container">
      <WeatherCard data={current} handleAddFavorite={handleAddFavorite} />

      <div className="graph-section">
        <h3 className="graph-title">{city.toUpperCase()} 주간 기온</h3>
        <WeatherGraphDraw data={weekly} />
      </div>
    </div>
  );
};

export default HomePage;
