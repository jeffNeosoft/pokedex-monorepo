import { Box, Button, PokeCard } from "@pokedex/components";
import React from "react";
import { useSelector } from "react-redux";
import { AppStore, wrapper } from "../store/configure";
import { fetchPokemonData, getPokemonData } from "../store/pokemonData";
import { useRouter } from "next/router";
import { IPokemonData } from "../types/index.types";
import { GetServerSideProps } from "next";
import { styles } from "../styles/styles";

const PokemonDetails = () => {
	const details: IPokemonData | null = useSelector(getPokemonData);
	const router = useRouter();
	return (
		<>
			<Box sx={styles.back_container}>
				<Button sx={styles.back} onClick={() => router.push("/")}>
				&larr; BACK
				</Button>
			</Box>
			<Box sx={styles.card_container}>
				{details && (
					<PokeCard
						name={details.name ?? ""}
						height={details.height}
						weight={details.weight}
						types={details.types}
						stats={details.stats}
						image={details.image}
					/>
				)}
			</Box>
		</>
	);
};
export default PokemonDetails;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store: AppStore) => async (context) => {
	if (!!context?.params?.name) {
    const {params:{name}}=context;
		await store.dispatch(fetchPokemonData(Array.isArray(name)?name[0]:name));
	}
	return {
		props: {},
	};
});
