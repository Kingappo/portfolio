import React from "react";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

function Home() {
  return (
    <section id="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </section>
  );
}

export default Home;
