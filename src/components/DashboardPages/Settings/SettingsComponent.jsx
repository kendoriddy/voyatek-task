import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Tabs, Tab } from "@mui/material";
import { RolesComponent, UsersComponent } from "./Tabs";

const SettingsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Settings
        </Link>
        <Typography color="text.primary" sx={{ color: "#98a2b3" }}>
          Users & Roles Settings
        </Typography>
      </Breadcrumbs>
      <div className="mt-4">
        <h3 className="text-6 font-bold mb-2">Users & Roles</h3>
        <p className="text-base font-normal mb-5 text-[#98a2b3]">
          Manage all users in your business
        </p>
      </div>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        textColor="#98a2b3"
        indicatorColor="primary"
        aria-label="Users and Roles tabs"
      >
        <Tab
          label="Users"
          sx={{ textTransform: "none", color: selectedTab === 0 ? "#0d6efd" : "#98a2b3" }}
        />
        <Tab
          label="Roles"
          sx={{ textTransform: "none", color: selectedTab === 1 ? "#0d6efd" : "#98a2b3" }}
        />
      </Tabs>
      {selectedTab === 0 ? <UsersComponent /> : <RolesComponent />}

    </div>
  );
};

export default SettingsComponent;
