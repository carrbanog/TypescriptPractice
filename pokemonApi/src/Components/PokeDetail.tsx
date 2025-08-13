// import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../Api/PokeApi";
import { Link, useParams } from "react-router-dom";
import MoveListToggle from "./MoveListToggle";
import type { PokemonDetailTypes } from "../types/PoekmonType";
import "./css/PokeDetail.css";
import { usePokemonListContext } from "../ContextApi/PokemonListApi";

const PokeDetail = () => {
  const { name, pokeIndex } = useParams<{ name: string; pokeIndex: string }>();
  const { pokemonList } = usePokemonListContext();

  //f5누르면 화면에 안나오는거 수정하기기

  const currentIndex = Number(pokeIndex);
  const nextPokemon = pokemonList[currentIndex];
  const {
    data: pokemonDetail,
    isLoading,
    isError,
  } = useQuery<PokemonDetailTypes>({
    queryKey: ["pokemonDetails", name], //querykey가 같아서 api data를 안받올때 있어서 이름도 키로 추가가
    queryFn: () => getPokemonDetails(name!),
  });
  // console.log(pokemonList[currentIndex].name);
  console.log(pokemonDetail);
  console.log(nextPokemon);
  console.log(`useParam ${name}, ${pokeIndex}`);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !pokemonDetail) return <div>Error</div>;
  //useQuery는 초기 data가 undefiend이기 때문에 에러 메세지 출력 -> !pokemonDetail로 타입 좁히기

  // console.log(pokemonDetail.stats);

  return (
    <div className="pokomon-detail-card">
      <Link
        to={`/pokemon/${currentIndex + 1}/${nextPokemon.name}`}
        className="nextPokeIndex"
      >
        next
      </Link>
      <h1 className="pokemon-detail-name">{name}</h1>
      <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
      <div className="types">
        <h3>타입: </h3>
        <ul>
          {pokemonDetail.types.map((e, idx) => (
            <li key={idx}>{e.type.name}</li>
          ))}
        </ul>
      </div>

      <div className="abilities">
        <h3>특성</h3>
        <ul className="abilities-list">
          {pokemonDetail.abilities.map((e, index) => (
            <li key={index}>{e.ability.name}</li>
          ))}
        </ul>
      </div>

      <div className="stats">
        <h3>종족값</h3>
        <ul className="status-list">
          {pokemonDetail.stats.map((e, idx) => (
            <li key={idx}>{e.base_stat}</li>
          ))}
        </ul>
      </div>

      <div className="moves">
        <h3>기술</h3>
        <MoveListToggle moves={pokemonDetail.moves} />
      </div>
    </div>
  );
};

export default PokeDetail;
