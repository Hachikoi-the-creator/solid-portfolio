import { Component, createSignal } from "solid-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectsContainer from "./components/ProjectsContainer";

const App: Component = () => {
  const [color, setColor] = createSignal("purple");

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <ProjectsContainer />
    </>
  );
};

export default App;
