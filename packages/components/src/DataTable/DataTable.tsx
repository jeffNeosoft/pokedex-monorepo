import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IDataTableProps, TRowData } from "./DataTable.types";
import {styles } from "./DataTable.styles";
import { Box } from "@mui/material";
const Table = ({
	rows,
	column,
	onRowClick,
	getRowId,
	paginationModel,
	paginationModelChange,
	isLoading = false,
	rowCount,
}: IDataTableProps) => {

	return (
		<Box sx={styles.tableContainer}>
			<DataGrid
				sx={styles.dataTable}
				rows={rows}
				columns={column}
				onRowClick={(row) => onRowClick(row)}
				rowCount={rowCount}
				getRowId={(row: TRowData) => getRowId(row)}
				pagination
				paginationMode='server'
				paginationModel={paginationModel}
				onPaginationModelChange={paginationModelChange}
				loading={isLoading}
			/>
		</Box>
	);
};
export default Table;
