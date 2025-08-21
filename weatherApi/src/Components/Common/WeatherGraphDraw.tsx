import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { WeeklyWeather } from "../../Types/WeatherType";

interface DrawWeatherGraphProps {
  data: WeeklyWeather;
}

const WeatherGraphDraw: React.FC<DrawWeatherGraphProps> = ({ data }) => {
  const chartData = data.list.map((item) => ({
    date: item.dt_txt,
    temp: item.main.temp,
    feels_like: item.main.feels_like,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        <Line type="monotone" dataKey="feels_like" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherGraphDraw;
