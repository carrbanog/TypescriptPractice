import React, { createContext, useState, useContext, Children } from "react";

const pokemonListContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  console.log(pokemonList);

  return (
    <pokemonListContext.Provider value={{ pokemonList, setPokemonList }}>
      {children}
    </pokemonListContext.Provider>
  );
};

export const usePokemonListContext = () => {
  const context = useContext(pokemonListContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
