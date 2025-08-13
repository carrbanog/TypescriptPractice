import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Page/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Components/Page/Search";

// import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
