import { Component } from "solid-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectsContainer from "./components/ProjectsContainer";
import TestSnow from "./components/TestSnow";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import TestInput from "./components/TestInput";

const App: Component = () => {
  return (
    <>
      <Navbar />
      {/* <TestInput /> */}
      <TestSnow />
      <Hero />
      <AboutMe />
      <ProjectsContainer />
      <Skills />
      <ContactMe />
    </>
  );
};

export default App;
