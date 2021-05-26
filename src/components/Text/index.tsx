import React from "react";
import Image from "next/image";
import { IPlanets } from "../../../@types/Planets";
import styles from "./style.module.css";

interface IProps {
  title: string;
  text: string | number;
}
export const Text: React.FC<IProps> = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
