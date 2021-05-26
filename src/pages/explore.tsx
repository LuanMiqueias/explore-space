import { GetStaticProps } from "next";
import React from "react";
import { IData, IPlanets } from "../../@types/Planets";
import { Planets } from "../components/Planets";
import styles from "../styles/pages/explore.module.css";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${process.env.URL_API}/planets`);
  const planets: IPlanets[] = await res.json();
  return {
    props: { planets },
  };
};
export default function explore({ planets }: IData) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Planets planets={planets} />
      </div>
    </div>
  );
}
