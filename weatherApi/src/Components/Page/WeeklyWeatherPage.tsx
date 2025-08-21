import React from "react";
import "./Search.css";
import CitySearch from "../Common/CitySearch";
import { useCitySearch } from "../../Hooks/useCitySearth";
import { useQuery } from "@tanstack/react-query";
import { getWeatherApi } from "../../assets/Api/WeatherApi";
import type { WeeklyWeather } from "../../Types/WeatherType";
import WeatherGraphDraw from "../Common/WeatherGraphDraw";

const WeeklyWeatherPage = () => {
  const { input, city, setInput, handleSubmit } = useCitySearch();
  const { data, isError, isLoading } = useQuery<WeeklyWeather>({
    queryKey: ["weather", city],
    queryFn: () => getWeatherApi.fetchWeeklyWeather(city),
    enabled: !!city,
  });
  // console.log(data);
  // data.list.map((e) => console.log(e));

  return (
    <div className="search-page">
      <CitySearch
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />

      {isLoading && <p>로딩 중...</p>}
      {isError && <p>에러 발생</p>}
      {data && <WeatherGraphDraw data={data} />}
    </div>
  );
};

export default WeeklyWeatherPage;
