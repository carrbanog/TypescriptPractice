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

export interface WeeklyWeather {
  list: {
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
    };
  }[];
}
