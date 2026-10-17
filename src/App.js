import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Expertise } from "./Components/Expertise";
import { Impact } from "./Components/Impact";
import { Experience } from "./Components/Experience";
import { Skills } from "./Components/Skills";
import { Education } from "./Components/Education";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { prefersReducedMotion } from "./hooks/useInView";

export default function App() {
  React.useEffect(() => {
    // Start entrance animations once the loading screen has cleared.
    const start = () =>
      Aos.init({
        duration: 800,
        once: true,
        easing: "ease-out-quart",
        offset: 40,
        disable: prefersReducedMotion(),
      });
    if (window.__preloaderDone || !document.getElementById("preloader")) start();
    else window.addEventListener("preloader:done", start, { once: true });
    // Recompute reveal positions when content expands or collapses.
    let t;
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(() => Aos.refresh(), 150);
    });
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
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
