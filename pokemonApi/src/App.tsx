import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./ContextApi/PokemonListApi";
import PokemonList from "./Components/PokemonList";
import PokeDetail from "./Components/PokeDetail";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <PokemonProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:pokeIndex/:name" element={<PokeDetail />} />
          </Routes>
        </Router>
      </PokemonProvider>
    </div>
  );
}

export default App;
