import "../styles/skills.scss";
import { Component } from "solid-js";
import KnownTools from "./mols/KnownTools";
import MostUsedSkills from "./mols/MostUsedSkills";

const Skills: Component = () => {
  return (
    <section class="skills" id="skills">
      <h2 class="gradient-subtitle">Tech Stack</h2>
      <article>
        <h3>I used the most</h3>
        <div class="tech-stack--wrapper">
          <MostUsedSkills />
        </div>
      </article>

      <article class="tech-stack">
        <h3>I have used</h3>
        <div class="tech-stack--wrapper">
          <KnownTools />
        </div>
      </article>

      {/*
      dunno what tf put here lul
      <h2>I can do X for my clients</h2>
      <article></article>

      <h2>List of 3 main services</h2>
      <article></article> */}
    </section>
  );
};

export default Skills;
