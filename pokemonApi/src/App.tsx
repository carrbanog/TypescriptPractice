import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./Components/PokemonList";
import PokeDetail from "./Components/PokeDetail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokeDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
