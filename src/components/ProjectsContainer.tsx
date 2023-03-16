import "../styles/projectsContainer.scss";
import { Component, For } from "solid-js";
import projectsData, { ProjectT } from "../assets/projectsData";
import Project from "./Project";

const ProjectsContainer: Component = () => {
  const cleanerReturns = (projectsData: ProjectT) => {
    const { imgUrl, title, desc, liveLink, codeLink, techStack, rowReverse } =
      projectsData;

    return (
      <Project
        {...{ title, imgUrl, desc, liveLink, codeLink, techStack, rowReverse }}
      />
    );
  };

  return (
    <div class="main-container" id="projects">
      <div class="title-wrapper">
        <h2 class="gradient-subtitle">Projects</h2>
      </div>
      <div class="wrapper">
        <For each={projectsData}>{(project) => cleanerReturns(project)}</For>
      </div>
    </div>
  );
};

export default ProjectsContainer;
