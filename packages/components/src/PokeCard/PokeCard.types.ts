import { POKEMON_TYPE } from "./PokeCard.styles";

export type TPokemonTypeKeys = keyof typeof POKEMON_TYPE;
export type IAbilityProp = {
	ability: {
		name: string;
		url: string;
	};
};
export interface ICardProps {
	name: string;
	height?: number;
	weight?: number;
	image?: string;
	stats?: {
		value: number | string;
		name: string
	}[];
	types?: TPokemonTypeKeys[];
}

