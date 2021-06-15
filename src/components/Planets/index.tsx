import React from "react";
import { IPlanets } from "../../../@types/Planets";
import { PlanetItem } from "../planetItem";
import styles from "./style.module.css";

interface IProps {
  currentPlanetIndex: number;
  planets: IPlanets[];
}

export const Planets: React.FC<IProps> = ({ planets, currentPlanetIndex }) => {
  return (
    <div className={styles.container}>
      {planets.map((planet, index) => {
        return (
          <PlanetItem
            planetInfo={planet}
            key={planet._id}
            active={currentPlanetIndex === index}
          />
        );
      })}
    </div>
  );
};
