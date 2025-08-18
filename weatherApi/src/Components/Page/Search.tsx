import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeatherApi } from "../../assets/Api/WeatherApi";
import type { Weather } from "../../Types/WeatherType";

import "./Search.css";
import { favariteCityManager } from "../../assets/Utils/FavoriteManager";
import WeatherCard from "../Common/WeatherCard";

//즐겨찾기 추가, 삭제, 리스트 보기 클래스
// const FavoriteAdd = new FavoriteManger<string>();

const Search: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const { data, isLoading, isError } = useQuery<Weather>({
    queryKey: ["weather", city],
    queryFn: () => getWeatherApi.fetchWeather(city),
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
