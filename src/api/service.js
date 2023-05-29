import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const getAllPokemonData = async () => {
  const result = await axios.get(URL);
  return result.data;
};
