import React from "react";
import { Grid } from "@mui/material";
import PokeCard from "./PokeCard";
import { TPokemonTypeKeys } from "./PokeCard.types";
const cardProps = {
  name: "Pikachu",
  height: 10,
  weight: 20,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
  stats: [
    {
      value: 10,
      name: "Power",
    },
    {
      value: 650,

      name: "HP",
    },
    {
      value: 650,

      name: "Power",
    },
    {
      value: 650,

      name: "HP",
    },
    {
      value: 650,

      name: "Power",
    },
  ],
  types: ["normal", "electric", "fire"] as TPokemonTypeKeys[],
};
export default {
  component: <PokeCard {...cardProps} />,
  title: "PokeCard",
};

export const Default = {
  render: () => (
    <div style={{ display: "flex" }}>
      <Grid
        container
        justifyContent={"center"}
        alignContent={"stretch"}
        alignItems={"stretch"}
      >
        <PokeCard {...cardProps} />
      </Grid>
    </div>
  )
};
