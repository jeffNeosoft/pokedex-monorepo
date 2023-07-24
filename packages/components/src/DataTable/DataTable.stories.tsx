import React from "react";
import Table from "./DataTable";
import { IDataTableProps } from "./DataTable.types";
import { Typography } from "@mui/material";
const tableProps: IDataTableProps = {
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
  onRowClick: () => {},
  paginationModelChange: () => {},
  getRowId: (row) => row.name,
};
export default {
  component: <Table {...tableProps} />,
  title: "Table",
};

export const Default = {
  render: () => {
    return (
      <>
        <Table {...tableProps} />
      </>
    );
  },
};
