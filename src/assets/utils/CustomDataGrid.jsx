import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const CustomDataGrid = ({ columns, rows }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns.map((col) => ({
        ...col,
        headerClassName: "custom-header-class",
      }))}
      pageSize={1000}
      className="border-none"
      style={{ border: "none", width: "100%" }}
      checkboxSelection
      getRowClassName={(params) => "data-row"}
    />
  );
};

export default CustomDataGrid;
