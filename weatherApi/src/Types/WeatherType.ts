export interface Weather {
  name: string;
  main: WeatherMain;
  wind: {
    speed: number;
    deg: number;
  };
  weather: {
    id: number;
    description: string;
    icon: string;
  }[];
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  humidity: number;
}
