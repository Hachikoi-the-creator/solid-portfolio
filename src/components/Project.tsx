import { Component, For } from "solid-js";
import styles from "../styles/project.module.scss";
import linkSvg from "../assets/link.svg";
import codeSvg from "../assets/code.svg";
import { ProjectT } from "../assets/projectsData";

const Project: Component<ProjectT> = (props) => {
  const { imgUrl, title, desc, liveLink, codeLink, techStack, rowReverse } =
    props;

  return (
    <div class={rowReverse ? styles["row-reverse"] : styles["row-normal"]}>
      <div class={styles["desc-section"]}>
        <h3 class={styles["project-title"]}>{title}</h3>
        <p class={styles["desc"]}>{desc}</p>

        <div class={styles["tech-stack-section"]}>
          <h5 class={styles["stack-title"]}>Stack used</h5>
          <div class={styles["tech-wrapper"]}>
            <p>POGGER</p>
            <For each={techStack}>
              {(tool, i) => (
                <li>
                  {i() + 1} : {tool}
                </li>
              )}
            </For>
            {/* {techStack.map((tool) => (
              <p class={}"tech-name" key={tool}>
                {tool}
              </p>
            ))} */}
          </div>
        </div>
      </div>

      <div class={styles["links"]}>
        <a href={liveLink} class={styles["link gradient-btn"]}>
          {true ? (
            <span>Live Site</span>
          ) : (
            <img
              src={linkSvg}
              alt="goto the project live page"
              decoding="async"
              loading="lazy"
            />
          )}
        </a>
        <a href={codeLink} class={styles["link gradient-btn"]}>
          {true ? (
            <span>Code Source</span>
          ) : (
            <img
              src={codeSvg}
              alt="take a look at the code of the project"
              decoding="async"
              loading="lazy"
            />
          )}
        </a>
      </div>

      <a href={liveLink} class={styles["thumbnail-wrapper"]}>
        <img
          src={imgUrl}
          alt={`preview of ${title}`}
          class={styles["thumbnail"]}
        />
      </a>
    </div>
  );
};

export default Project;
