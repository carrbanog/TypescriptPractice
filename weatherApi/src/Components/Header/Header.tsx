import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={`/`}>MainPage</Link>
      </div>
      <ul className="header-list">
        <Link to={`/search`}>
          <li className="search">지역 검색</li>
        </Link>
        <Link to={`/weeklyweathergraph`}>
          <li className="graph">변동 그래프</li>
        </Link>

        <li className="air">대기질 지수</li>
        <Link to={`/favorite`}>
          <li className="favorite-list">즐겨찾기</li>
        </Link>
        <li className="news">
          <Link to={`/news`}>관련 뉴스</Link>
        </li>
      </ul>
      <div className="sns">인스타</div>
    </div>
  );
};

export default Header;
