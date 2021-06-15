import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/pages/home.module.css";
import Link from "next/link";

export default function Home() {
  const navigate = useRouter();
  const [hide, setHide] = React.useState(false);

  function toPageExplore() {
    navigate.push("/explore");
  }
  function animateHide() {
    setHide(!hide);
  }
  function handleButton(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    animateHide();
    setTimeout(toPageExplore, 450);
  }
  return (
    <div
      className={`${styles.container} ${
        hide && styles.container_hide_animation
      }`}
    >
      <div className={styles.content}>
        <div className={styles.text_content}>
          <h1>
            Explore <span>space</span>
          </h1>
          <p>see information about the planets of the solar system</p>
        </div>
        <Link href="/explore">
          <a className={styles.link_home}>go to space</a>
        </Link>
      </div>
    </div>
  );
}
