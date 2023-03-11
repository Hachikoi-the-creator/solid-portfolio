import { Component } from "solid-js";
import "../styles/hero.scss";

const Hero: Component = () => {
  return (
    <div class={"hero"} id="hero">
      <div class={"opacity-container"}>
        <p class={"intro"}>Hi, My Name Is:</p>
        <p class={"name"}>Adan Moreno</p>
      </div>

      <div class={"wrap-container"}>
        <p class={"charge"}>Full Stack</p>
        <p class={"charge"}>Web Dev</p>
      </div>

      <div class={"likes"}>I like to build cool apps that have a purpose</div>

      <div class={"buttons"}>
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
