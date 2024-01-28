import React, { useState } from "react";
import { Drawer, Box, IconButton } from "@mui/material";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={isSidebarOpen}
        sx={{
          width: isSidebarOpen ? "20vw" : "0",
          flexShrink: 0,
          transition: "width 300ms ease-in-out",
          overflowX: "hidden",
          "& .MuiDrawer-paper": {
            width: isSidebarOpen ? "20vw" : "0",
          },
        }}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "80vw" }}>
        <IconButton
          color="inherit"
          aria-label="open sidebar"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {children}
      </Box>
    </Box>
  );
}

export default Layout;
