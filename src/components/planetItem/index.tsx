import React from "react";
import { IPlanets } from "../../../@types/Planets";
import styles from "./style.module.css";
import { Text } from "../Text";

interface IProps {
  planetInfo: IPlanets;
  active: boolean;
}
export const PlanetItem: React.FC<IProps> = ({ planetInfo, active }) => {
  return (
    <div className={`${styles.container} ${active && styles.planet__active}`}>
      <div className={styles.container_text}>
        <div className={styles.title}>
          <h1>{planetInfo.name}</h1>
          <h2>{planetInfo.subtitle}</h2>
        </div>
        <Text
          title="Surface temperature"
          text={planetInfo.surface_temperature}
        />
        <Text title="Orbits" text={planetInfo.orbits} />
        <Text title="Mass" text={planetInfo.mass} />
        <Text title="Orbit Period" text={planetInfo.orbit_period} />

        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.image}>
        <img src={planetInfo.image_url} width="100%" alt={planetInfo.name} />
      </div>
    </div>
  );
};
