import { GetStaticProps } from "next";
import React from "react";
import { IData, IPlanets } from "../../@types/Planets";
import { Planets } from "../components/Planets";
import styles from "../styles/pages/explore.module.css";

import datafake from "../../datafake";
import { ScrollBar } from "../components/ScrollBar";

export const getStaticProps: GetStaticProps = async (context) => {
  const planets: IPlanets[] = datafake;
  return {
    props: { planets },
  };
};

export default function explore({ planets }: IData) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [counter, setCounter] = React.useState(0);

  const [startTouch, setStartTouch] = React.useState(0);
  const [endTouch, setEndTouch] = React.useState(0);

  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    if (e.deltaY > 0 && counter < planets.length - 1) {
      setCounter(counter + 1);
    } else if (e.deltaY < 0 && counter > 0) {
      setCounter(counter - 1);
    }
  }
  function handleScrollMoblie(e: React.TouchEvent<HTMLDivElement>) {
    if (e.type === "touchstart") {
      setStartTouch(e.changedTouches[0].pageY);
    }
    if (e.type === "touchend") {
      setEndTouch(e.changedTouches[0].pageY);
      if (startTouch > endTouch && counter < planets.length - 1) {
        setCounter(counter + 1);
      } else if (startTouch < endTouch && counter > 0) {
        setCounter(counter - 1);
      }
    }
  }
  React.useEffect(() => {
    console.log(counter);
    containerRef.current.style.transform = `translateY(-${counter * 100}%)`;
  }, [counter]);
  return (
    <div className={styles.container}>
      <div
        className={styles.planets}
        ref={containerRef}
        onWheel={(e: React.WheelEvent<HTMLDivElement>) => handleScroll(e)}
        onTouchStart={(e) => handleScrollMoblie(e)}
        onTouchEnd={(e) => handleScrollMoblie(e)}
      >
        <div className={styles.content}>
          <Planets planets={planets} currentPlanetIndex={counter} />
        </div>
      </div>
      <ScrollBar indexActivePlanet={counter} totalPlanets={planets.length} />
    </div>
  );
}
