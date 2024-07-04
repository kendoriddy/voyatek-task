import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}`);
      setUsers(response.data);
      toast.success("Users fetched successfully!");
    } catch (error) {
      toast.error("Error fetching users!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addUser = async (user) => {
    try {
      await axios.post(`${apiUrl}`, user);
      fetchUsers();
      toast.success("User added successfully!");
    } catch (error) {
      toast.error("Error adding user!");
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      await axios.put(`${apiUrl}${id}`, updatedUser);
      fetchUsers();
      toast.success("User updated successfully!");
    } catch (error) {
      toast.error("Error updating user!");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiUrl}${id}`);
      fetchUsers();
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Error deleting user!");
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
