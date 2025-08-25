import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoritesPage from "./Components/Page/FavoritesPage";
import SearchPage from "./Components/Page/SearchPage";
import WeeklyWeatherPage from "./Components/Page/WeeklyWeatherPage";
import HomePage from "./Components/Page/HomePage";
import NewsPage from "./Components/Page/NewsPage";

// import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/weeklyweathergraph" element={<WeeklyWeatherPage />} />
          <Route path="/favorite" element={<FavoritesPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
