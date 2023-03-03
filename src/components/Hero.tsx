import { Component } from "solid-js";
import styles from "../styles/hero.module.scss";

const Hero: Component = () => {
  return (
    <div class={styles["hero"]} id="hero">
      <div class={styles["opacity-container"]}>
        <p class={styles["intro"]}>Hi, My Name Is:</p>
        <p class={styles["name"]}>Adan Moreno</p>
      </div>

      <div class={styles["wrap-container"]}>
        <p class={styles["charge"]}>Full Stack</p>
        <p class={styles["charge"]}>Web Dev</p>
      </div>

      <div class={styles["likes"]}>
        I like to build cool apps that have a purpose
      </div>

      <div class={styles["buttons"]}>
        <a
          class={"gradient-btn"}
          href="https://www.linkedin.com/in/adan-moreno7/"
        >
          LinkedIn
        </a>
        <a class={"gradient-btn"} href="https://twitter.com/8koi2">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Hero;
