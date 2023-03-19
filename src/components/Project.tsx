import "../styles/project.scss";
import { Component, For } from "solid-js";
import { ProjectT } from "../assets/projectsData";
import { createViewportObserver } from "@solid-primitives/intersection-observer";
import ProjectLink from "./atoms/ProjectLink";

const Project: Component<ProjectT> = (props) => {
  const { imgUrl, title, desc, liveLink, codeLink, techStack, rowReverse } =
    props;

  const [intersectionObserver] = createViewportObserver([], {
    threshold: 0.5,
  });

  const handleObserver = (event: IntersectionObserverEntry) => {
    if (event.isIntersecting) event.target.classList.add("appear");
  };

  return (
    <article
      class={`project-container ${rowReverse ? "row-reverse" : "row-normal"}`}
    >
      <div
        use:intersectionObserver={handleObserver}
        class="desc-section fade-in"
      >
        <h3 class="project-title">{title}</h3>
        <p class="desc">{desc}</p>

        <div class="tech-stack-ection">
          <h5 class="stack-title">Stack used</h5>
          <ul class="tech-wrapper">
            <For each={techStack}>{(tool) => <li class="tool">{tool}</li>}</For>
          </ul>
        </div>

        <div class="links-container">
          <ProjectLink
            url={liveLink}
            descText="Live Preview"
            iconType="preview"
          />

          <ProjectLink
            url={codeLink}
            descText="Code Source"
            iconType="code-src"
          />
        </div>
      </div>

      <a
        use:intersectionObserver={handleObserver}
        href={liveLink}
        class="thumbnail-wrapper fade-in"
      >
        <img src={imgUrl} alt={`preview of ${title}`} class="thumbnail" />
      </a>
    </article>
  );
};

export default Project;
