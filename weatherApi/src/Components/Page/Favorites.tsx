import React, { useState } from "react";
import { favariteCityManager } from "../../assets/Utils/FavoriteManager";
import { useQuery } from "@tanstack/react-query";
import type { Weather } from "../../Types/WeatherType";
import { fetchWeather } from "../../assets/Api/WeatherApi";
import WeatherCard from "../Common/WeatherCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>(
    favariteCityManager.list()
  );
  const { data, isLoading, isError } = useQuery<Weather>({
    queryKey: ["weather", favorites],
    queryFn: () => fetchWeather(favorites[0]),
    enabled: favorites.length > 0,
  });
  console.log(favorites);
  console.log(data);

  if (favorites.length === 0) return <p>즐겨찾기한 도시가 없습니다.</p>;
  if (isLoading) return <p>로딩 중...</p>;

  return (
    <div>
      <WeatherCard data={data} />
    </div>
  );
};

export default Favorites;
