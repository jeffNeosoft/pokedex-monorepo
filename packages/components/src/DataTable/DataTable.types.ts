import { GridColDef, GridPaginationModel } from "@mui/x-data-grid";
export type TGridColumnDef = GridColDef;
export type TRowData = { name: string, id:number|string };

export interface IDataTableProps {
	rows: TRowData[];
	column: GridColDef[];
	onRowClick: ({ row }: { row: TRowData }) => void;
	getRowId: (row: TRowData) => string | number;
	paginationModel: { page: number; pageSize: number };
	paginationModelChange: (arg: GridPaginationModel) => void;
	isLoading: boolean;
	rowCount: number;
}