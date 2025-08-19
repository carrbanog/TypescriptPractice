import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeatherApi } from "../../assets/Api/WeatherApi";
import type { Weather } from "../../Types/WeatherType";

import "./Search.css";
import { favariteCityManager } from "../../assets/Utils/FavoriteManager";
import WeatherCard from "../Common/WeatherCard";
import CitySearch from "../Common/CitySearch";
import { useCitySearch } from "../../Hooks/useCitySearth";

//즐겨찾기 추가, 삭제, 리스트 보기 클래스
// const FavoriteAdd = new FavoriteManger<string>();

const SearchPage: React.FC = () => {
  const { input, city, setInput, handleSubmit } = useCitySearch();

  const { data, isLoading, isError } = useQuery<Weather>({
    queryKey: ["weather", city],
    queryFn: () => getWeatherApi.fetchWeather(city),
    enabled: !!city,
  });

  const handleAddFavorite = () => {
    if (city) {
      favariteCityManager.add(city);
      alert(`${city}를 즐겨찾기에 추가했습니다.`);
    }
  };

  return (
    <div className="search-page">
      <CitySearch
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />

      {isLoading && <p>로딩 중...</p>}
      {isError && <p>에러 발생</p>}

      {data && (
        <WeatherCard
          data={data}
          handleAddFavorite={() => handleAddFavorite()}
        />
      )}
    </div>
  );
};

export default SearchPage;
