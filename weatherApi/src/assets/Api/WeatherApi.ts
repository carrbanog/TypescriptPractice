import type { Weather } from "../../Types/WeatherType";

export class WeatherApiClass {
  private apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
  async fetchWeather(city: string): Promise<Weather> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=kr&appid=${this.apiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("실패");
    return res.json();
  }

  async fetchWeeklyWeather(city: string): Promise<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=kr&appid=${this.apiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("실패");
    return res.json();
  }

  async fetchFavoriteWeather(cities: string[]): Promise<Weather[]> {
    return Promise.all(cities.map((city) => this.fetchWeather(city)));
  }
}

export const getWeatherApi = new WeatherApiClass();
