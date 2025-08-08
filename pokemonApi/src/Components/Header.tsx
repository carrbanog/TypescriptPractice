import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePokemonListContext } from "../ContextApi/PokemonListApi";

const Header = () => {
  const [searchItem, setSearchItem] = useState("");
  const { pokemonList } = usePokemonListContext();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const foundIndex = pokemonList.findIndex(
      (pokemon) => pokemon.name.toLowerCase() === searchItem.toLowerCase()
    );
    console.log(pokemonList[foundIndex]);
    console.log(foundIndex);
    if (foundIndex !== -1) {
      // const pokeIndex = foundIndex - 1;
      const pokeName = pokemonList[foundIndex].name;
      navigate(`/pokemon/${foundIndex + 1}/${pokeName}`);
    }
  };
  return (
    <div>
      <Link to="/">main</Link>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="포켓몬 이름 결과"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default Header;
