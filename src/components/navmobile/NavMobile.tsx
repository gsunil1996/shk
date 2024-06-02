"use client"

import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";
import styles from "./NavMobile.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className={styles.container}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="blue" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.menu}
          >
            <Box component="ul" sx={{ display: "grid", gap: 2 }}>
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className={styles.menuItemWrapper}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      className={styles.menuItem}
                      href={route.href}
                      underline="none"
                      color="inherit"
                    >
                      <Typography className={styles.menuItemTitle} style={{ color: "#fff" }} >
                        {route.title}
                      </Typography>
                      <Icon className={styles.icon} style={{ color: "#fff" }} />
                    </Link>
                  </motion.li>
                );
              })}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
