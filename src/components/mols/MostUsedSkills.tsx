import { Component, For } from "solid-js";
import sass from "../../assets/skills/sass.png";
import git from "../../assets/skills/git.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import express from "../../assets/skills/express.png";
import html from "../../assets/skills/html.png";
import node from "../../assets/skills/node.png";
import next from "../../assets/skills/next.png";
import sequelize from "../../assets/skills/sequ.png";
import tailwind from "../../assets/skills/tailwind.png";
import ts from "../../assets/skills/ts.png";
import js from "../../assets/skills/js.png";
import insomnia from "../../assets/skills/insomnia.png";

const imgsArr = [
  sass,
  git,
  css,
  react,
  express,
  html,
  node,
  next,
  sequelize,
  tailwind,
  ts,
  js,
  insomnia,
];

const MostUsedSkills: Component = () => {
  return (
    <For each={imgsArr} fallback={<div>No items</div>}>
      {(item, index) => (
        <div class="img-container" data-index={index()}>
          <img src={item} alt="missing-img" />
        </div>
      )}
    </For>
  );
};

export default MostUsedSkills;
