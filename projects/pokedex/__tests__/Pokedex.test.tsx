import * as React from "react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MOCK_STORE_DATA } from "../constants";


jest.mock("next/router", () => require("next-router-mock"));

const mockStore = configureStore([thunk]);
const store = mockStore(MOCK_STORE_DATA);
describe("Test cases for Pokedex", () => {
  it("List render", () => {
    const { container } = render(
      <Provider store={store}>
        <Home/>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("Redirect the the detial page", () => {
    const MOCK = {
      push: jest.fn(),
    };
    const useRouterMock = jest.spyOn(require("next/router"), "useRouter");
    useRouterMock.mockImplementation(() => MOCK);

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    fireEvent.click(screen.getByText("bulbasaur"));
    expect(MOCK.push).toHaveBeenCalledWith("/bulbasaur");
  });
});
