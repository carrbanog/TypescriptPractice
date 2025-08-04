import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async () => {
  const response = await axios.get(`${BASE_URL}/pokemon`);
  console.log(response.data);
  return response.data.results;
};

export const getPokemonDetails = async (name: string) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
  return response.data;
};
