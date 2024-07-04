import React, { useState } from "react";
import { Drawer, Box, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import HeaderComponent from "./Header";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderComponent toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Toolbar />

      <Box sx={{ display: "flex", flexGrow: 1, mt: 2 }}>
        <Drawer
          variant="permanent"
          anchor="left"
          open={isSidebarOpen}
          sx={{
            width: isSidebarOpen ? "20vw" : "0",
            transition: "width 300ms ease-in-out",
            overflowX: "hidden",
            "& .MuiDrawer-paper": {
              width: isSidebarOpen ? "20vw" : "0",
              mt: "4px", // Adjust height for AppBar
              height: "calc(100vh - 64px)", // Full height minus AppBar height
              position: "relative", // Ensures the Drawer is positioned correctly
            },
          }}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3, width: isSidebarOpen ? "78vw" : "98vw" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
