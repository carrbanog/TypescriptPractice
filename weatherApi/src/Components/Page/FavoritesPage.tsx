import React, { useEffect, useState } from "react";
import { favariteCityManager } from "../../assets/Utils/FavoriteManager";
import { useQuery } from "@tanstack/react-query";
import type { Weather } from "../../Types/WeatherType";
import { getWeatherApi } from "../../assets/Api/WeatherApi";
import FavoriteWeatherCard from "../Common/FavoriteWeatherCard";

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // localStorage에서 즐겨찾기 불러오기
  useEffect(() => {
    const storedFavorites = favariteCityManager.list();
    setFavorites(storedFavorites);
  }, []);

  const { data, isLoading, isError, refetch } = useQuery<Weather[]>({
    queryKey: ["favoriteWeather"],
    queryFn: () => getWeatherApi.fetchFavoriteWeather(favorites),
    enabled: favorites.length > 0,
  });

  // favorites가 바뀌면 자동으로 refetch
  useEffect(() => {
    if (favorites.length > 0) refetch();
  }, [favorites, refetch]);

  const handleRemove = (city: string) => {
    favariteCityManager.remove(city.toLowerCase());
    setFavorites(favariteCityManager.list());
  };

  if (favorites.length === 0) return <p>즐겨찾기한 도시가 없습니다.</p>;
  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 불러오는데 실패했습니다.</p>;

  return (
    <div className="favorite-weather-container">
      {data && (
        <FavoriteWeatherCard
          FavoriteWeatherdata={data}
          onRemove={handleRemove}
        />
      )}
    </div>
  );
};

export default FavoritesPage;
