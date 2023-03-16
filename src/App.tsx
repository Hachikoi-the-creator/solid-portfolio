import { Component, createSignal } from "solid-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectsContainer from "./components/ProjectsContainer";
import TestSnow from "./components/TestSnow";

const App: Component = () => {
  return (
    <>
      <Navbar />
      {/* <TestSnow /> */}
      <Hero />
      <AboutMe />
      <ProjectsContainer />
    </>
  );
};

export default App;
