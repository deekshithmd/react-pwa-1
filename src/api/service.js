import axios from "axios";

export const getAllPokemonData = async ({ limit }) => {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  return result.data;
};
