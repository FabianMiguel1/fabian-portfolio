import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="background-grid" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
}