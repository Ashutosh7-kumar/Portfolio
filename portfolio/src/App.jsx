import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/AboutMe";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Backto from "./components/Backto";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div id="Hero">
        <Hero />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Resume">
        <Resume />
      </div>
      {/* <div id="About">
        <About />
      </div> */}
      <div id="Project">
        <Project />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
      <Backto />
    </div>
  );
}
