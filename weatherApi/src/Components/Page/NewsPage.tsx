import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeatherApi } from "../../assets/Api/WeatherApi";
import "./NewsPage.css";
import type { NewsItem } from "../../Types/WeatherType";

const NewsPage = () => {
  const { data, isLoading, isError } = useQuery<NewsItem>({
    queryKey: ["weatherNews"],
    queryFn: () => getWeatherApi.fetchWeatherNews(),
  });
  console.log(data);
  if (isLoading) return <p>뉴스 불러오는 중...</p>;
  if (isError) return <p>뉴스를 가져오는데 실패했습니다.</p>;

  return (
    <div className="news-page">
      {data &&
        data?.results.map((item, index) => (
          <article className="news-item" key={`${item.link}-${index}`}>
            <div className="news-image-wrap">
              <img
                className="news-image"
                src={item.image_url}
                alt={item.title}
              />
            </div>
            <div className="news-content">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h2 className="news-title">{item.title}</h2>
              </a>
              <div className="news-date">{item.pubDate}</div>
            </div>
          </article>
        ))}
    </div>
  );
};

export default NewsPage;
