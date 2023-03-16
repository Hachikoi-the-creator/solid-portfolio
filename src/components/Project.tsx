import "../styles/project.scss";
import { Component, createSignal, For } from "solid-js";
import { ProjectT } from "../assets/projectsData";

const Project: Component<ProjectT> = (props) => {
  const { imgUrl, title, desc, liveLink, codeLink, techStack, rowReverse } =
    props;

  const [isHover, setIsHover] = createSignal({
    live: false,
    code: false,
  });

  // depending on the key, set the value of the key to the opposite of its current value
  const handleHover = (e: MouseEvent, key: "live" | "code") => {
    setIsHover({ ...isHover(), [key]: !isHover()[key] });
  };

  return (
    <div
      class={`project-container ${rowReverse ? "row-reverse" : "row-normal"}`}
    >
      <div class="desc-section">
        <h3 class="project-title">{title}</h3>
        <p class="desc">{desc}</p>

        <div class="tech-stack-ection">
          <h5 class="stack-title">Stack used</h5>
          <ul class="tech-wrapper">
            <For each={techStack}>{(tool) => <li class="tool">{tool}</li>}</For>
          </ul>
        </div>

        <div class="links-container">
          <a class="button-28" href={liveLink}>
            <div class="inner-link-items">
              <span>Live Preview</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
              </svg>
            </div>
          </a>

          <a class="button-28" href={codeLink}>
            <div class="inner-link-items">
              <span>Code Source</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <a href={liveLink} class="thumbnail-wrapper">
        <img src={imgUrl} alt={`preview of ${title}`} class="thumbnail" />
      </a>
    </div>
  );
};

export default Project;
