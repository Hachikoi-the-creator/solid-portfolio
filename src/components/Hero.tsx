import { Component} from "solid-js";
import "../styles/hero.scss";
import { Motion } from "@motionone/solid"

const Hero: Component = () => {

  return (
    <Motion.div animate={{ opacity: [0, 1], scale: [0.3, 1] }}
      transition={{
        duration: 1, easing: "ease-in-out"
      }}
      class={"hero"} id="hero"
    >
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
        <a class={"gradient-btn"} href="https://github.com/hachikoi-the-creator">
          Github
        </a>
      </div>
    </Motion.div >
  );
};

export default Hero;
