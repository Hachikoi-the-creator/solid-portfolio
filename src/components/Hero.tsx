import { Component } from "solid-js";
import "../styles/hero.scss";
import { Motion } from "@motionone/solid";
import GlowButton from "./atoms/GlowButton";

const Hero: Component = () => {
  return (
    <Motion.div
      animate={{ opacity: [0, 1], scale: [0.3, 1] }}
      transition={{
        duration: 1,
        easing: "ease-in-out",
      }}
      class="hero"
      id="hero"
    >
      <div class="inner-wrapper">
        <div class="opacity-container">
          <p class="intro">Hi, My Name Is:</p>
          <p class="name">Adan Moreno</p>
        </div>

        <div class="wrap-container">
          <p class="charge">Full Stack</p>
          <p class="charge">Web Dev</p>
        </div>

        <article class="likes">
          <p class="blue-gradient">
            I'm Mexican and currently doing a hackaton, learning more about
            Next13 & Go.
          </p>
          <p class="blue-gradient">
            I like building highly perfomant applications in react, and I have
            an special interest for fast-paced work enviroments
          </p>
        </article>

        <div class="buttons">
          <GlowButton text="Contact Me" url="#contact-me" isExternal={false} />
        </div>
      </div>
    </Motion.div>
  );
};

export default Hero;
