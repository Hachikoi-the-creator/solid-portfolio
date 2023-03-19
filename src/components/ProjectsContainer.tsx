import "../styles/projectsContainer.scss";
import { Component, For } from "solid-js";
import projectsData from "../assets/projectsData";
import Project from "./Project";

const ProjectsContainer: Component = () => {
  return (
    <section class="main-container p-top" id="projects">
      <div class="title-wrapper">
        <h2 class="gradient-subtitle">Projects</h2>
      </div>
      <div class="wrapper">
        <For each={projectsData}>
          {(project) => (
            <Project
              title={project.title}
              imgUrl={project.imgUrl}
              desc={project.desc}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
              techStack={project.techStack}
              rowReverse={project.rowReverse}
            />
          )}
        </For>
      </div>
    </section>
  );
};

export default ProjectsContainer;
