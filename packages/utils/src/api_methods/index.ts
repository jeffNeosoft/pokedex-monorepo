import { fetchData } from "./base_instance";

export const fetchPokemonList = async (page: number, limit: number = 15) => {
  const {
    data: { count, results },
  } = await fetchData(`?offset=${page}&limit=${limit}`);
  const response_data = {
    count,
    results: results.map((result) => {
      const split_url: Array<string> = result.url.split("/");
      return { name: result.name, id: split_url[split_url.length - 2] };
    }),
  };
  return response_data;
};

export const fetchPokemoByName = async (pokemonName: string) => {
  const {
    data: { id, height, name, sprites, stats, types, weight },
  } = await fetchData(`/${pokemonName}`);
  const reponse_data = {
    id,
    height,
    weight,
    name,
    image: sprites.other.dream_world.front_default,
    stats: stats.map((element) => {
      return { name: element.stat.name, value: element.base_stat };
    }),
    types: types.map((element) => element.type.name),
  };
  return reponse_data;
};
