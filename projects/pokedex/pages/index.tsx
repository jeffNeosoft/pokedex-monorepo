import { Box, DataTable } from "@pokedex/components";
import { AppDispatch, AppStore, wrapper } from "../store/configure";
import { useDispatch, useSelector } from "react-redux";
import {
	getPokemonList,
	isLoadingPokemon,
	selectPagination,
	selectPokemonCount,
	selectPokemonListData,
} from "../store/pokemonList";
import { useRouter } from "next/router";
import { IPageModel } from "../types/index.types";
import { ReactElement } from "react";
import { POKEDEX_COLUMNS } from "../constants";

const Home= ():ReactElement => {
	const router = useRouter();
	const dispatch = useDispatch() as AppDispatch;
	const pokemonList = useSelector(selectPokemonListData);
	const count = useSelector(selectPokemonCount);
	const isLoading = useSelector(isLoadingPokemon);
	const paginationModel = useSelector(selectPagination);

	const handlePaginationChange = async (value: IPageModel) => {
		console.log({page:value.page + 1, limit:value.pageSize})
		dispatch(getPokemonList({page:value.page + 1, limit:value.pageSize}));
	};
	return (
			<Box sx={{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
				<DataTable
				rows={pokemonList}
				column={POKEDEX_COLUMNS}
				onRowClick={({ row }) => router.push(`/${row.name}`)}
				getRowId={(e) => e.name}
				rowCount={count}
				isLoading={isLoading}
				paginationModel={paginationModel}
				paginationModelChange={handlePaginationChange}
			/>
			</Box>
	);
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps((store: AppStore) => async () => {
	try {
		const pagination = store.getState().pokemonListing.pagination;
		await store.dispatch(getPokemonList(pagination.page > 0 ? {page:pagination.page} : {page:1, limit:pagination.pageSize}));
	} catch (error) {
		console.log({ error });
	}
	return {
		props: {},
	};
});
