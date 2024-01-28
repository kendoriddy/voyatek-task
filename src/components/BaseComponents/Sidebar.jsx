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
import arrowDownSVG from "../../assets/images/svg/keyboard_arrow_down.svg";
import leslie from "../../assets/images/jpg/leslie.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
            location.pathname === "/dashboard/payment-in/customer-transaction"
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
          <Typography variant="h6" component="div" sx={{ padding: "40px 0 0 30px" }}>
            PROJECT-X
          </Typography>
          <List
            sx={{ width: "20vw", paddingTop: "40px", paddingLeft: "10px", paddingRight: "10px" }}
          >
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={homeSVG} alt="overview" />
              </ListItemIcon>
              <ListItemText primary="Overview" sx={{ color: "#748684" }} />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={inboxSVG} alt="inbox" />
              </ListItemIcon>
              <ListItemText primary="Inbox" sx={{ color: "#748684" }} />
            </ListItem>
            <ListItem
              button
              onClick={handleClick}
              sx={{
                backgroundColor:
                  location.pathname === "/dashboard/payment-in" ||
                  location.pathname === "/dashboard/payment-in/customer-transaction"
                    ? "#025C56"
                    : "transparent",
                borderRadius:
                  location.pathname === "/dashboard/payment-in" ||
                  location.pathname === "/dashboard/payment-in/customer-transaction"
                    ? "100px"
                    : "",
                color:
                  location.pathname === "/dashboard/payment-in" ||
                  location.pathname === "/dashboard/payment-in/customer-transaction"
                    ? "white"
                    : "",
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
                    sx={{ fontSize: "14px", fontWeight: "400", color: "#748684" }}
                  />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/dashboard/payment-in"
                  sx={{
                    color: location.pathname === "/dashboard/payment-in" ? "#025C56" : "#748684",
                    paddingLeft: "32px",
                  }}
                >
                  <ListItemText
                    primary="Payments In"
                    sx={{
                      fontSize: "14px",
                      color:
                        location.pathname === "/dashboard/payment-in" ||
                        location.pathname === "/dashboard/payment-in/customer-transaction"
                          ? "#025C56"
                          : "#748684",
                      "& span": {
                        fontWeight:
                          location.pathname === "/dashboard/payment-in" ||
                          location.pathname === "/dashboard/payment-in/customer-transaction"
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
                    sx={{ fontSize: "14px", fontWeight: "400", color: "#748684" }}
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
                    sx={{ fontSize: "14px", fontWeight: "400", color: "#748684" }}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={monetizationSVG} alt="payables" />
              </ListItemIcon>
              <ListItemText primary="Payables" sx={{ color: "#748684" }} />
              <ChevronRightIcon sx={{ color: "#748684" }} />
            </ListItem>

            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={insertSVG} alt="reports" />
              </ListItemIcon>
              <ListItemText primary="Reports" sx={{ color: "#748684" }} />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={createSVG} alt="configuration" />
              </ListItemIcon>
              <ListItemText primary="Configuration" sx={{ color: "#748684" }} />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={chartSVG} alt="expenses" />
              </ListItemIcon>
              <ListItemText primary="Expenses" sx={{ color: "#748684" }} />
            </ListItem>
          </List>{" "}
        </Box>
        <Box sx={{ paddingBottom: "32px" }}>
          <List>
            <ListItem button component={Link} to="/dashboard/payment-in">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={settingsSVG} alt="Settings" />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ color: "#748684" }} />
            </ListItem>
            <ListItem button component={Link} to="/">
              <ListItemIcon sx={{ marginRight: "16px", minWidth: "0" }}>
                <img src={logoutSVG} alt="Logout" />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ color: "#748684" }} />
            </ListItem>
          </List>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <div className="flex items-center">
              <img src={leslie} alt="User" />
              <div className="ml-4">
                <p className="text-xs text-[#012320] font-medium">Michael Michael</p>
                <span className="text-[10px] text-[#748684] font-normal">Administrator</span>
              </div>
            </div>
            <img src={arrowDownSVG} alt="Arrow Down" sx={{ marginLeft: "auto" }} />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
