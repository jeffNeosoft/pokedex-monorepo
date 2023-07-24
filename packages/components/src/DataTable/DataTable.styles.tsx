export const styles = {
  dataTable: {
    background: "rgba( 255, 255, 255, 0.35 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4.5px )",
    WebkitBackdropFilter: "blur( 4.5px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    "& .MuiDataGrid-row:hover": {
      cursor: "pointer",
    },
    "& .MuiDataGrid-cell:focus": {
      outline: "unset",
    },
  },
  tableContainer: { height: "85vh", width: "70%" },
};
