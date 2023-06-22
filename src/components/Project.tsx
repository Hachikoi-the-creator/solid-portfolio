import "../styles/project.scss";
import { Component, For } from "solid-js";
import { ProjectT } from "../assets/projectsData";
import { createViewportObserver } from "@solid-primitives/intersection-observer";
import ProjectLink from "./atoms/ProjectLink";

const Project: Component<ProjectT> = (props) => {
  const { imgSrcSet, title, desc, liveLink, codeLink, techStack, rowReverse } =
    props;

  const [intersectionObserver] = createViewportObserver([], {
    threshold: 0,
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
          <h4 class="stack-title">Stack used</h4>
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
        target="_blank"
        class="thumbnail-wrapper fade-in"
      >
        <img
          srcSet={`${imgSrcSet[300]} 320w, ${imgSrcSet[600]} 640w, ${imgSrcSet[1300]} 1280w`}
          sizes="(max-width: 380px) 320px,
            (max-width: 680px) 640px,
            1280px"
          src={imgSrcSet[1300]}
          alt="filling map"
          class="thumbnail"
        />
      </a>
    </article>
  );
};

export default Project;
