export const fetchWeather = async (city: string) => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=kr&appid=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("날씨 데이터를 가져오는데 실패했습니다.");
  }
  return res.json();
};
