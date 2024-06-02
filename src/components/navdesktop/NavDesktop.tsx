"use client"

import React from 'react';
import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import { routes } from '../routes';
import styles from './NavDesktop.module.css';
import { motion } from "framer-motion";

export const NavDesktop = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component="ul"
      className={`${styles.navList} ${isMdUp ? styles.navListLg : ''}`}
    >
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <motion.li key={title} style={{ color: "#6415FF" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={href}
              className={styles.navItem}
              underline="none"
              color="inherit"
            >
              <Icon />
              {title}
            </Link>
          </motion.li>
        );
      })}
    </Box>
  );
};
