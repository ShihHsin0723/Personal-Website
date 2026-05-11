import React, { useEffect } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      ".section-title, .section-title-about, .section-subtitle, .about-shell, .profile-pic, .about-lead, .about-copy, .skills-shell, .skill-card, .resume-panel, .education-section, .experience-section, .project-card, .footer-inner"
    );

    revealTargets.forEach((target) => {
      target.classList.add("reveal-on-scroll");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content">
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
