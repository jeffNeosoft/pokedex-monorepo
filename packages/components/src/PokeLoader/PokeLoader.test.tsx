import * as React from "react";
import { render,screen } from "@testing-library/react";
import PokeLoader from "./PokeLoader";

describe("Test the PokeLoader Component",()=>{
    it("renders successfully",()=>{
        render(<PokeLoader/>);
        const pokeball = screen.getByTestId("pokeball")
        expect(pokeball).toBeInTheDocument();
    })
})