import * as React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./PokeCard";
import { TPokemonTypeKeys } from "./PokeCard.types";

describe("Card component", () => {
  const mockProps = {
    name: "Raichu",
    image: "Raichu.jpg",
    height: 23,
    weight: 34,
    location: "https://pokeapi.co/api/v2/pokemon/25",
    stats: [
      {
        name: "attack",
        value: 10,
      },
    ],
    types: ["poison"] as TPokemonTypeKeys[],
  };

  it("Renders the card successfully", () => {
    const { container } = render(<Card {...mockProps} />);

    expect(screen.getByText("Raichu")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
