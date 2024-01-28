import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Typography,
  Box,
  Divider,
  Collapse,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import createSVG from "../../assets/images/svg/create.svg";
import checkSVG from "../../assets/images/svg/fact_check.svg";
import homeSVG from "../../assets/images/svg/home.svg";
import inboxSVG from "../../assets/images/svg/inbox.svg";
import insertSVG from "../../assets/images/svg/insert_chart.svg";
import logoutSVG from "../../assets/images/svg/logout.svg";
import monetizationSVG from "../../assets/images/svg/monetization_on.svg";
import chartSVG from "../../assets/images/svg/pie_chart.svg";
import settingsSVG from "../../assets/images/svg/settings.svg";
import leslie from "../../assets/images/jpg/leslie.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Sidebar({ isSidebarOpen }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return isSidebarOpen ? (
    <Box
      sx={{
        width: { xs: "100%", sm: "20vw" },
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ padding: "40px 0 0 16px" }}
          >
            PROJECT-X
          </Typography>
          <List sx={{ width: "20vw", paddingTop: "40px" }}>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={homeSVG} alt="overview" />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={inboxSVG} alt="inbox" />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem
              button
              onClick={handleClick}
              sx={{
                backgroundColor:
                  location.pathname === "/dashboard/payment-in"
                    ? "#025C56"
                    : "transparent",
                borderRadius:
                  location.pathname === "/dashboard/payment-in" ? "100px" : "",
                color:
                  location.pathname === "/dashboard/payment-in" ? "white" : "",
                "&:hover": {
                  backgroundColor: "#025C56",
                },
              }}
            >
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={checkSVG} alt="receivables" />
              </ListItemIcon>
              <ListItemText primary="Receivables" />
              {open ? (
                <ExpandMoreIcon sx={{ color: "#fff" }} />
              ) : (
                <ChevronRightIcon sx={{ color: "#fff" }} />
              )}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  component={Link}
                  to="/dashboard/payment-in"
                  sx={{ paddingLeft: "32px" }}
                >
                  <ListItemText
                    primary="Invoices"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#748684",
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/dashboard/payment-in"
                  sx={{
                    color:
                      location.pathname === "/dashboard/payment-in"
                        ? "#025C56"
                        : "#748684",
                    paddingLeft: "32px",
                  }}
                >
                  <ListItemText
                    primary="Payments In"
                    sx={{
                      fontSize: "14px",
                      color:
                        location.pathname === "/dashboard/payment-in"
                          ? "#025C56"
                          : "#748684",
                      "& span": {
                        fontWeight:
                          location.pathname === "/dashboard/payment-in"
                            ? "600"
                            : "400",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/dashboard/payment-in"
                  sx={{ paddingLeft: "32px" }}
                >
                  <ListItemText
                    primary="Products"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#748684",
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/dashboard/payment-in"
                  sx={{ paddingLeft: "32px" }}
                  className="text-sm font-normal"
                >
                  <ListItemText
                    primary="Customers"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#748684",
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={monetizationSVG} alt="payables" />
              </ListItemIcon>
              <ListItemText primary="Payables" />
              <ChevronRightIcon sx={{ color: "#748684" }} />
            </ListItem>

            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={insertSVG} alt="reports" />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={createSVG} alt="configuration" />
              </ListItemIcon>
              <ListItemText primary="Configuration" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={chartSVG} alt="expenses" />
              </ListItemIcon>
              <ListItemText primary="Expenses" />
            </ListItem>
          </List>{" "}
        </Box>
        <Box sx={{ paddingBottom: "32px" }}>
          <List>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={settingsSVG} alt="Settings" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button component={Link} to="/">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={logoutSVG} alt="Logout" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center", padding: "16px" }}>
            <img src={leslie} alt="User" />
            <Typography variant="body1" sx={{ marginLeft: "16px" }}>
              User Name
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : null;
}

export default Sidebar;
