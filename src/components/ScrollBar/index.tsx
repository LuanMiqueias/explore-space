import React from "react";
import styles from "./style.module.css";
interface IProps {
  indexActivePlanet: number;
  totalPlanets: number;
}
export const ScrollBar: React.FC<IProps> = ({
  indexActivePlanet,
  totalPlanets,
}) => {
  return (
    <div className={styles.containerScroll}>
      <div
        className={styles.scroll}
        style={{
          height: `${100 / totalPlanets}%`,
          transform: `translateY(${100 * indexActivePlanet}%)`,
        }}
      ></div>
      <img src="/arrow_down.svg" className={styles.scrollArrow}></img>
    </div>
  );
};
