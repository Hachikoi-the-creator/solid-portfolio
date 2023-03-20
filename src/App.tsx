import { Component } from "solid-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectsContainer from "./components/ProjectsContainer";
import TestSnow from "./components/TestSnow";
import ContactMe from "./components/ContactMe";

const App: Component = () => {
  return (
    <>
      <Navbar />
      {/* <TestSnow /> */}
      <Hero />
      <AboutMe />
      <ProjectsContainer />
      {/* <ContactMe /> */}
    </>
  );
};

export default App;
