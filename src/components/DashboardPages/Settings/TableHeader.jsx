import React, { useState } from "react";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Search } from "@mui/icons-material";
import { PlusCircle } from "@phosphor-icons/react";
import AddUserModal from "./UserModal";

const TableHeader = ({ setSearchQuery, onAddUser }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser) => {
    onAddUser(newUser);
    setModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between space-x-4 p-4 mt-4 rounded-t-lg bg-[#fff]">
      <div className="flex items-center">
        <TextField
          variant="outlined"
          placeholder="Search here..."
          size="small"
          className="flex-grow"
          style={{ width: "300px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IconButton
          sx={{
            "&:hover": { backgroundColor: "#CBD5E1" },
            border: "1px solid #CBD5E1",
            marginLeft: "10px",
            borderRadius: "8px",
          }}
        >
          <FilterListIcon /> <span className="text-sm font-bold ml-2">Filter</span>
        </IconButton>
      </div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0d6efd",
          "&:hover": { backgroundColor: "#0b5ed7" },
          textTransform: "none",
        }}
        onClick={() => setModalOpen(true)}
      >
        <PlusCircle size={24} color="#fff" />
        <span className="ml-1">New User</span>
      </Button>
      <AddUserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddUser={handleAddUser}
      />
    </div>
  );
};

export default TableHeader;
