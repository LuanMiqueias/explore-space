import React from "react";
import { IData } from "../../../@types/Planets";
import { PlanetItem } from "../planetItem";
import styles from "./style.module.css";

export const Planets = ({ planets }: IData) => {
  return (
    <div className={styles.container}>
      {planets.map((planet) => {
        return <PlanetItem {...planet} key={planet._id} />;
      })}
    </div>
  );
};
