import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { User, Lock, BellSimple, Money, Tag, Users, Cloud } from "@phosphor-icons/react";
import logoutSVG from "../../assets/images/svg/logout.svg";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { text: "Account", icon: <User />, path: "#" },
    { text: "Security", icon: <Lock />, path: "#" },
    { text: "Notifications", icon: <BellSimple />, path: "#" },
    { text: "Pricing", icon: <Money />, path: "#" },
    { text: "Sales", icon: <Tag />, path: "#" },
    { text: "Users and Roles", icon: <Users />, path: "/dashboard/settings" },
    { text: "Backups", icon: <Cloud />, path: "#" },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      sx={{
        width: "20vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& .MuiDrawer-paper": {
          borderRight:
            location.pathname === "/dashboard/settings/customer-transaction"
              ? "1px solid #BDC3C3"
              : "none",
        },
      }}
    >
      <Box
        sx={{
          width: "20vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <List
            sx={{ width: "20vw", paddingTop: "40px", paddingLeft: "10px", paddingRight: "10px" }}
          >
            <h4 className="font-semibold">Settings</h4>
            {menuItems.map((item, index) => (
              <ListItem
                button
                component={Link}
                to={item.path}
                key={index}
                sx={{
                  backgroundColor: location.pathname === item.path ? "#f0f6fe" : "transparent",
                  color: location.pathname === item.path ? "#0d6efd" : "#748684",
                }}
              >
                <ListItemIcon
                  sx={{
                    marginRight: "16px",
                    minWidth: "0",
                    color: location.pathname === item.path ? "#0d6efd" : "#748684",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ paddingBottom: "32px" }}>
          <List>
            <ListItem button component={Link} to="/">
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  paddingX: "4px",
                  width: "fit-content",
                  display: "flex",
                  paddingY: "8px",
                }}
              >
                <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                  <img src={logoutSVG} alt="Logout" />
                </ListItemIcon>
                <ListItemText
                  primary="Back to Dashboard"
                  sx={{ color: "#748684", paddingRight: "8px" }}
                />
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
