import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";
import { AppState } from "./configure";
import { HYDRATE } from "next-redux-wrapper";
import { fetchPokemonList } from "@pokedex/utils";
import {
  IFetchPokemonListProps,
  IPokeList,
  IPokemonAPIList,
  IResult,
} from "../types/index.types";

const initialState: IPokemonAPIList = {
  data: [],
  cacheData: [],
  count: 0,
  isLoading: false,
  pagination: {
    page: 0,
    pageSize: 15,
  },
  error: null,
};

export const pokemonSlice = createSlice({
  name: "pokemonListing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        if (
          state.pagination.page > action.payload.pokemonListing.pagination.page
        ) {
          return {
            ...state,
          };
        }
        return {
          ...state,
          ...action?.payload?.pokemonListing,
        };
      })
      .addCase(getPokemonList.pending, (state) => {
        state.isLoading = true;
        state.data = [];
        state.error = null;
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.cacheData = action.payload.cacheData;
        state.count = action.payload.count;
        state.pagination = action.payload.pagination;
      })
      .addCase(getPokemonList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default pokemonSlice.reducer;

export const selectPokemonListData = (state: AppState) =>
  state.pokemonListing.data;
export const selectPokemonCacheData = (state: AppState) =>
  state.pokemonListing.cacheData;
export const selectPokemonCount = (state: AppState) =>
  state.pokemonListing.count;
export const selectPagination = (state: AppState) =>
  state.pokemonListing.pagination;
export const isLoadingPokemon = (state: AppState) =>
  state.pokemonListing.isLoading;

export const getPokemonList = createAsyncThunk<
  Omit<IPokemonAPIList, "isLoading" | "error">,
  IFetchPokemonListProps,
  { rejectValue: string }
>("pokemonListing/fetchPokemonList", async ({ page, limit = 15 }, thunkAPI) => {
  try {
    const pokeListing = (thunkAPI.getState() as AppState).pokemonListing;
    if (page >= 1 && pokeListing.cacheData[page - 1]) {
      return {
        ...pokeListing,
        data: pokeListing.cacheData[page - 1],
        pagination: {
          page: page - 1,
          pageSize: limit,
        },
      };
    } else {
      const count = (page - 1) * limit;
      const data: IPokeList = await fetchPokemonList(count, limit);
      return {
        data: data.results,
        cacheData: [...pokeListing.cacheData, data.results],
        count: data.count,
        pagination: {
          page: page - 1,
          pageSize: limit,
        },
      };
    }
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Pokemon data.");
  }
});
