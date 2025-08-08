import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../Api/PokeApi";
import type { Pokemon } from "../types/PoekmonType";
import { Link } from "react-router-dom";
import "./PokemonList.css";
import { usePokemonListContext } from "../ContextApi/PokemonListApi";

const PokemonList = () => {
  const { pokemonList, setPokemonList } = usePokemonListContext();

  const { data, isLoading, isError } = useQuery<Pokemon[]>({
    queryKey: ["pokemonList"],
    queryFn: getPokemonList,
    //() => getPokemonList() 인자가 필요할 때만 사용
  });

  useEffect(() => {
    if (data) {
      setPokemonList(data);
    }
  }, [data, setPokemonList]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(pokemonList);
  return (
    <div className="PokemonList">
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList?.map((pokemon: Pokemon, pokeIndex: number) => (
          <div className="pokemon">
            <li key={pokemon.name}>{pokemon.name}</li>
            <Link to={`/pokemon/${pokeIndex + 1}/${pokemon.name}`}>
              View Details
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
