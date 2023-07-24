import { TPokemonTypeKeys } from "@pokedex/components";
export interface IResult {
  name: string;
  id: number | string;
}
export interface IPageModel {
  page: number;
  pageSize: number;
}
export interface IPokemonAPIList {
  data: IResult[];
  count: number;
  cacheData: IResult[][];
  isLoading: boolean;
  pagination:IPageModel;
  error: string | null;
} ;
export interface IPokeList {
  count: number;
  results: IResult[];
}
export interface IFetchPokemonListProps {
  page: number;
  limit?: number;
}
export type IPokemonData = {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  image?: string;
  stats: {
    name: string;
    value: number | string;
  }[];
  types?: TPokemonTypeKeys[];
};
