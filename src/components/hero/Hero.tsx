"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ x: -1000 }} // Initial position off-screen to the left
        animate={{ x: 0 }} // Animating to position 0
        transition={{ type: "spring", stiffness: 120, duration: 1 }} // Spring animation
        className={styles.textContainer}
      >
        <p className={styles.heading}>Delicious & Affordable</p>
        <p className={styles.subHeading}>Meals Near You.</p>
        <p className={styles.headingText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }} // Initial position off-screen to the bottom and opacity set to 0
        animate={{ y: 0, opacity: 1 }} // Animating to position 0 and opacity 1
        transition={{ type: "tween", duration: 1, delay: 0.5 }} // Linear animation with delay for the fade effect
        className={styles.imageContainer}
      >
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          alt="no image"
          className={styles.image}
        />
      </motion.div>
    </div>
  );
};

export default Hero;