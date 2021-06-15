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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [conter, setconter] = React.useState(0);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(0);

  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    if (e.deltaY > 0 && conter < planets.length - 1) {
      setconter(conter + 1);
    } else if (e.deltaY < 0 && conter > 0) {
      setconter(conter - 1);
    }
  }
  function handleScrollMoblie(e: React.TouchEvent<HTMLDivElement>) {
    if (e.type === "touchstart") {
      setStart(e.changedTouches[0].pageY);
    }
    if (e.type === "touchend") {
      console.log(e);
      setEnd(e.changedTouches[0].pageY);
      if (start > end && conter < planets.length - 1) {
        setconter(conter + 1);
      } else if (start < end && conter > 0) {
        setconter(conter - 1);
      }
    }
  }
  React.useEffect(() => {
    console.log(conter);
    containerRef.current.style.transform = `translateY(-${conter * 100}%)`;
  }, [conter]);
  return (
    <div
      className={styles.container}
      ref={containerRef}
      onWheel={(e: React.WheelEvent<HTMLDivElement>) => handleScroll(e)}
      onTouchStart={(e) => handleScrollMoblie(e)}
      onTouchEnd={(e) => handleScrollMoblie(e)}
    >
      <div className={styles.content}>
        <Planets planets={planets} />
      </div>
    </div>
  );
}
