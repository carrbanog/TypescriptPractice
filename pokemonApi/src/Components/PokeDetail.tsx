import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../Api/PokeApi";
import { useParams } from "react-router-dom";

const PokeDetail = () => {
  const { name } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonDetails"],
    queryFn: () => getPokemonDetails(name),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(data);

  return (
    <div>
      <h1>Pokemon Detail</h1>
    </div>
  );
};

export default PokeDetail;
