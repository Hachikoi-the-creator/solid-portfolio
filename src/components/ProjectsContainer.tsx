import { Component, For } from "solid-js";
import styles from "../styles/projectsContainer.module.scss";
import projectsData, { ProjectT } from "../assets/projectsData";
import Project from "./Project";

const ProjectsContainer: Component = () => {
  const cleanerReturns = (projectsData: ProjectT) => {
    const { imgUrl, title, desc, liveLink, codeLink, techStack, rowReverse } =
      projectsData;

    return (
      <Project
        {...{ title }}
        {...{ imgUrl }}
        {...{ desc }}
        {...{ liveLink }}
        {...{ codeLink }}
        {...{ techStack }}
        {...{ rowReverse }}
      />
    );
  };

  return (
    <div class={styles["main-container"]} id="projects">
      <div class={styles["title-wrapper"]}>
        <h2 class={"gradient-subtitle"}>Projects</h2>
      </div>
      <div class={styles["wrapper"]}>
        <For each={projectsData}>{(project) => cleanerReturns(project)}</For>
      </div>
    </div>
  );
};

export default ProjectsContainer;
