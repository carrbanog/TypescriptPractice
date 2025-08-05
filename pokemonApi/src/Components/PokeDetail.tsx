// import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../Api/PokeApi";
import { useParams } from "react-router-dom";
import MoveListToggle from "./MoveListToggle";
import type { PokemonDetailTypes } from "../types/PoekmonType";
import "./css/PokeDetail.css";

const PokeDetail = () => {
  const { name } = useParams<{ name: string }>();
  const {
    data: pokemonDetail,
    isLoading,
    isError,
  } = useQuery<PokemonDetailTypes>({
    queryKey: ["pokemonDetails,"],
    queryFn: () => getPokemonDetails(name!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !pokemonDetail) return <div>Error</div>;
  //useQuery는 초기 data가 undefiend이기 때문에 에러 메세지 출력 -> !pokemonDetail로 타입 좁히기

  console.log(pokemonDetail.types);

  return (
    <div className="pokomon-detail-card">
      <h1 className="pokemon-detail-name">{name}</h1>
      <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
      <div className="types">
        <h3>타입: </h3>
        <ul>
          {pokemonDetail.types.map((e) => (
            <li>{e.type.name}</li>
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

      <div className="moves">
        <h3>기술</h3>
        <MoveListToggle moves={pokemonDetail.moves} />
      </div>
    </div>
  );
};

export default PokeDetail;
