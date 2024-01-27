import React from "react";
import { Drawer, Box } from "@mui/material";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
