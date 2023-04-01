import { Component } from "solid-js";
import { createViewportObserver } from "@solid-primitives/intersection-observer";
import "../styles/hero.scss";
import GlowButton from "./atoms/GlowButton";

const Hero: Component = () => {
  const [intersectionObserver] = createViewportObserver([], {
    threshold: 0.5,
  });

  const handleObserver = (event: IntersectionObserverEntry) => {
    if (event.isIntersecting) {
      event.target.classList.remove("fade-in");
      event.target.classList.add("appear");
    }
  };

  return (
    <div
      class="hero fade-in"
      id="hero"
      use:intersectionObserver={handleObserver}
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
    </div>
  );
};

export default Hero;
