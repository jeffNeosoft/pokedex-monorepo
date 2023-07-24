import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "./configure";
import { HYDRATE } from "next-redux-wrapper";

import { fetchPokemoByName } from "@pokedex/utils";
import { IPokemonData } from "../types/index.types";

interface PokemonDataState {
  data: IPokemonData | null;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonDataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchPokemonData = createAsyncThunk<
  IPokemonData,
  string,
  { rejectValue: string }
>("pokemonData/fetchPokemonData", async (name, thunkAPI) => {
  try {
    const res = await fetchPokemoByName(name);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Pokemon data.");
  }
});

export const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload.pokemonData,
        };
      })
      .addCase(fetchPokemonData.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const getPokemonData = (state: AppState) => state.pokemonData.data;
export const getPokemonDataStatus = (state: AppState) => state.pokemonData.loading;
export const getPokemonDataError = (state: AppState) => state.pokemonData.error;
