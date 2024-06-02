"use client"

import React from "react";
import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from "@mui/material";
import styles from "./Topbar.module.css";
import { NavDesktop } from "../navdesktop/NavDesktop";
import { NavMobile } from "../navmobile/NavMobile";

const Topbar = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="fixed" className={styles.topbar}>
      <Toolbar
        className={`${styles.navContainer} ${isMdUp ? styles.navContainerLg : ""
          }`}
      >
        <Box className={styles.logo}>⚡️</Box>

        {isMdUp ? (
          <div style={{ marginRight: "20px" }}>
            <NavDesktop />
          </div>
        ) : (
          <NavMobile />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
