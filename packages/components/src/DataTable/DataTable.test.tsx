import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Table from "./DataTable";
import { IDataTableProps } from "./DataTable.types";
import { Typography } from "@mui/material";

describe("Table rendering and Functionality", () => {
  const mockProps: IDataTableProps = {
    rows: [
      { name: "Charmander", id: 1 },
      { name: "Charmeleon", id: 2 },
      { name: "Charizard", id: 3 },
      { name: "Bulbasaur", id: 4 },
      { name: "IvySaur", id: 5 },
      { name: "VenaSaur", id: 6 },
    ],
    column: [
      {
        field: "name",
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderHeader: () => {
          return <Typography variant={"h5"}>PokeName</Typography>;
        },
      },
    ],
    paginationModel: { page: 1, pageSize: 10 },
    isLoading: false,
    rowCount: 6,
    onRowClick: jest.fn(),
    paginationModelChange: jest.fn(),
    getRowId: jest.fn(),
  };

  it("renders the DataGrid component with correct props", () => {
    const { container } = render(<Table {...mockProps} />);
    expect(screen.getByText(mockProps.rows[0].name)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("calls onRowClick when a row is clicked", () => {
    const { container } = render(<Table {...mockProps} />);
    const row = screen.getByText(mockProps.rows[0].name);
    fireEvent.click(row);
    expect(mockProps.onRowClick).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
