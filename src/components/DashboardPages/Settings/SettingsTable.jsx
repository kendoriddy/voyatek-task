import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import TableHeader from "./TableHeader";
import CustomDataGrid from "../../../assets/utils/CustomDataGrid";

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "emailAddress", headerName: "Email Address", flex: 1 },
  {
    field: "role",
    headerName: "Role",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          backgroundColor:
            params.value === "Administrator"
              ? "#f0f6fe"
              : params.value === "Sales Manager"
              ? "#e7f6ec"
              : "#fef4e6",
          color:
            params.value === "Administrator"
              ? "#1c77fd"
              : params.value === "Sales Manager"
              ? "#0f973d"
              : "#f58a07",
          padding: "2px 10px",
          borderRadius: "100px",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    description: "Action",
    sortable: false,
    renderCell: (params) => (
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer">
          <span className="text-[#0d6efd]"> Edit</span>
        </div>
        <div className="cursor-pointer">
          <span className="text-[#98a2b3]"> Remove</span>
        </div>
      </div>
    ),
  },
];

export default function SettingsTable() {
  const { users, loading, fetchUsers, addUser } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.emailAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredRows(filtered);
  }, [searchQuery, users]);

  return (
    <div className="flex flex-col gap-4 w-full" style={{ width: "100%" }}>
      <TableHeader setSearchQuery={setSearchQuery} onAddUser={addUser} />
      {loading ? <div>Loading...</div> : <CustomDataGrid columns={columns} rows={filteredRows} />}
    </div>
  );
}
