import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import TableHeader from "./TableHeader";
import CustomDataGrid from "../../../assets/utils/CustomDataGrid";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

export default function SettingsTable() {
  const { users, loading, fetchUsers, addUser, updateUser, deleteUser } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleUpdateUser = (id, updatedUser) => {
    updateUser(id, updatedUser);
    setIsEditModalOpen(false);
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = (id) => {
    deleteUser(id);
    setIsDeleteModalOpen(false);
  };

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
          <div className="cursor-pointer" onClick={() => handleEditUser(params.row)}>
            <span className="text-[#0d6efd]"> Edit</span>
          </div>
          <div className="cursor-pointer" onClick={() => handleDeleteUser(params.row)}>
            <span className="text-[#98a2b3]"> Remove</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full" style={{ width: "100%" }}>
      <TableHeader setSearchQuery={setSearchQuery} onAddUser={addUser} />
      {loading ? <div>Loading...</div> : <CustomDataGrid columns={columns} rows={filteredRows} />}
      <EditUserModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdateUser={handleUpdateUser}
        user={selectedUser}
      />
      <DeleteUserModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDeleteUser={() => handleConfirmDelete(selectedUser.id)}
        user={selectedUser}
      />
    </div>
  );
}
