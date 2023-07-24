import React from "react";
import { render, screen } from "@testing-library/react";
import TopAppBar from "./TopAppBar";

describe("Navbar render Test case", () => {
	
	it("renders the app bar with correct props", () => {
		const { container } = render(<TopAppBar/>);
		expect(container).toMatchSnapshot();
	});
});
