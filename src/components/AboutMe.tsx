import "../styles/aboutMe.scss";
import { createViewportObserver } from "@solid-primitives/intersection-observer";

export default function AboutMe() {
  const [intersectionObserver] = createViewportObserver([], {
    threshold: 0.5,
  });

  const handleObserver = (event: IntersectionObserverEntry) => {
    if (event.isIntersecting) event.target.classList.add("appear");
    // console.log(
    //   "intersecting",
    //   event.isIntersecting,
    //   "has class",
    //   event.target.classList.contains(className)
    // );
  };

  return (
    <section class="about-me p-top" id="about-me">
      <h2 class="gradient-subtitle">About Me</h2>
      <div class="content">
        <p use:intersectionObserver={handleObserver} class="fade-in">
          I started my journey by teaching myself how to code with Python and
          fell in love with the joy of solving complex problems. That same
          feeling led me to try Machine Learning since I have always loved math,
          but I was not able to pull through with motivation alone and decided
          that learning web development was way more efficient since it's a
          skill that can easily kickstart your way into entrepreneurship and
          everything has a web page nowdays!
        </p>
        <p use:intersectionObserver={handleObserver} class="fade-in">
          When I'm not coding, I can be reading any sort of things, from Manga,
          Manhwa, to non-fiction and self-help books, but lately the one thing
          I've been reading is documentation!I also love to challenge my own
          body; thus, I have tried Kapoeira and boxing, and I fell in love with
          a videogame called{" "}
          <a target="_blank" href="https://youtu.be/au8KePT5-rM">
            PIU{" "}
          </a>
          <a target="_blank" href="https://youtu.be/_CiMO9kWB34">
            (pump{" "}
          </a>
          <a target="_blank" href="https://youtu.be/jUGQO9iVkCw">
            it pu)
          </a>
        </p>
      </div>
    </section>
  );
}
