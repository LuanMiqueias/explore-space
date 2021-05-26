import React from "react";
import { IPlanets } from "../../../@types/Planets";
import styles from "./style.module.css";
import { Text } from "../Text";
import { motion } from "framer-motion";

export const PlanetItem = ({ ...planets }: IPlanets) => {
  return (
    <motion.div className={styles.container}>
      <div className={styles.container_text}>
        <div className={styles.title}>
          <h1>{planets.name}</h1>
          <h2>{planets.subtitle}</h2>
        </div>
        <Text title="Surface temperature" text={planets.surface_temperature} />
        <Text title="Orbits" text={planets.orbits} />
        <Text title="Mass" text={planets.mass} />
        <Text title="Orbit Period" text={planets.orbit_period} />

        <motion.button className={styles.button} layoutId="btn">
          Learn More
        </motion.button>
      </div>
      <div className={styles.image}>
        <img src={planets.image_url} width="100%" alt={planets.name} />
      </div>
    </motion.div>
  );
};
