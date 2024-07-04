import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  List,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import bv from "../../assets/images/png/bv1.png";
import bg from "../../assets/images/jpg/bg1.jpg";
import { BellSimple, CaretDown, Gear, Hamburger, Question, Wallet, X } from "@phosphor-icons/react";
import { Close } from "@mui/icons-material";

const HeaderComponent = ({ toggleSidebar, isSidebarOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "white", boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="open sidebar" onClick={toggleSidebar}>
          {isSidebarOpen ? <X color="#677286" /> : <MenuOpenIcon sx={{ color: "#677286" }} />}
        </IconButton>
        <img src={bv} alt="Logo" style={{ height: "40px", marginRight: "20px" }} />

        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "400px",
            display: "flex",
            alignItems: "center",
            bgcolor: "#f0f2f5",
            borderRadius: "4px",
            padding: "0 10px",
          }}
        >
          <SearchIcon sx={{ color: "#475367" }} />
          <InputBase placeholder="Search here..." sx={{ ml: 1, flex: 1 }} />
        </Box>

        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "20px" }}>
          <Box sx={{ textAlign: "center" }}>
            <IconButton color="inherit">
              <BellSimple color="#677286" />
            </IconButton>
            <Typography variant="body2" color="#677286">
              Notifications
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <IconButton color="inherit">
              <Wallet color="#677286" />
            </IconButton>
            <Typography variant="body2" color="#677286">
              Wallet
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <IconButton color="inherit">
              <Question color="#677286" />
            </IconButton>
            <Typography variant="body2" color="#677286">
              Enquiries
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <IconButton color="inherit">
              <Gear color="#0d6efd" />
            </IconButton>
            <Typography variant="body2" color="#0d6efd">
              Settings
            </Typography>
          </Box>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar alt="Profile Picture" src={bg} />
            <CaretDown color="#677286" className="ml-1" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
