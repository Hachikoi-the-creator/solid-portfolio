// import "../styles/navbar.scss";
import laptopCode from "../assets/white-laptop-code.svg";
import emailSvg from "../assets/white-email.svg";
import styles from "../styles/navbar.module.scss";
// import koi from "../assets/white-koi-kanji.svg";
import arrowUp from "../assets/up-arrow.png";

import { Component, createSignal } from "solid-js";

type ImageEvent = MouseEvent & {
  currentTarget: HTMLImageElement;
  target: Element;
};

const Navbar: Component = () => {
  // const [hoverImg, setHoverImg] = createSignal();

  return (
    <nav>
      <ul class={styles["nav-ul"]}>
        {/* hero */}
        <li class={styles["icon"]}>
          <a class={styles["icon-link"]} href="#hero">
            <img src={arrowUp} alt="goto home" class={styles["icon-img"]} />
          </a>
        </li>

        {/* projects */}
        <li class={styles["icon"]}>
          <a href="#projects" class={styles["icon-link"]}>
            <img src={laptopCode} alt={"name"} class={styles["icon-img"]} />
          </a>
        </li>

        {/* email */}
        <li class={styles["icon"]}>
          <a
            href="mailto:adan.more70@gmail.com?subject=I%20found%20your%20portfolio%20to%20be%20pretty%20interesting%2C%20would%20you%20like%20to%20schedule%20a%20call%3F"
            class={styles["icon-link"]}
          >
            <img src={emailSvg} alt={"name"} class={styles["icon-img"]} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
