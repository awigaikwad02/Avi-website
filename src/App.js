import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Impact } from "./Components/Impact";
import { Experience } from "./Components/Experience";
import { Skills } from "./Components/Skills";
import { Education } from "./Components/Education";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { prefersReducedMotion } from "./hooks/useInView";

export default function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
      disable: prefersReducedMotion(),
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
