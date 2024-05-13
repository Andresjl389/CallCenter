import { Button, IconButton, OutlinedInput, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { SideBarComponent, SideCollapseComponent } from "../sidebar";
import styled from "styled-components";
import { Height, Padding } from "@mui/icons-material";
import { useState } from "react";

type Props = {
  toggleSidebar?: () => void;
  sidebarCollapsed?: boolean;
};

const HeaderComponent = ({toggleSidebar, sidebarCollapsed}: Props) => {

  return (
    <>
      <header style={styles.header}>
        <div style={styles.menuContainer}>
          <IconButton
            style={{ background: "#efefef", borderRadius: 10 }}
            aria-label="example"
            onClick={toggleSidebar}
          >
            <MenuIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <Button style={styles.button}>Financiera</Button>
        </div>
        <OutlinedInput placeholder="Search" style={styles.search} />

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            height: 35,
          }}
        >
          <IconButton style={styles.iconButton}>
            <Avatar
              style={{ margin: "0px 5px 0px 5px", width: 25, height: 25 }}
            />
            <SettingsIcon style={{ margin: "0px 5px 0px 5px" }} />
          </IconButton>
        </div>
      </header>
      {sidebarCollapsed ? <SideBarComponent /> : <SideCollapseComponent />}
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 15,
  },
  button: {
    color: "#000",
    fontWeight: 600,
    fontSize: 20,
  },
  search: {
    height: 35,
    borderRadius: 20,
    width: 450,
  },
  iconButton: {
    background: "#c9def4",
    borderRadius: 60,
  },
  menuContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
};

export default HeaderComponent;
