import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const [currentLink, setCurrentLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "projects",
        "contact",
      ];
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const scrollPosition = window.scrollY + navbarHeight;

      for (const section of sections) {
        const target = document.getElementById(section);
        if (target) {
          const { offsetTop, offsetHeight } = target;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentLink(section);
            break;
          }
        }
      }
    };

    const onScroll = () => {
      handleScroll();
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavLinkClick = (link) => {
    setCurrentLink(link);
    const target = document.getElementById(link);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
      const togglerButton = document.querySelector(".navbar-toggler");
      if (
        togglerButton &&
        window.getComputedStyle(togglerButton).display !== "none"
      ) {
        togglerButton.click();
      }
    }
  };

  return (
    <Navbar expand="lg" className={` ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey="#home">
            <Nav.Link
              className={` ${
                currentLink === "home" ? "active-navbar-link" : "navbar-link"
              } ${scrolled ? "scrolled" : ""}`}
              onClick={() => handleNavLinkClick("home")}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              className={` ${
                currentLink === "about" ? "active-navbar-link" : "navbar-link"
              } ${scrolled ? "scrolled" : ""}`}
              onClick={() => handleNavLinkClick("about")}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              className={` ${
                currentLink === "education"
                  ? "active-navbar-link"
                  : "navbar-link"
              } ${scrolled ? "scrolled" : ""}`}
              onClick={() => handleNavLinkClick("education")}
            >
              EDUCATION
            </Nav.Link>
            <Nav.Link
              className={` ${
                currentLink === "experience"
                  ? "active-navbar-link"
                  : "navbar-link"
              } ${scrolled ? "scrolled" : ""}`}
              onClick={() => handleNavLinkClick("experience")}
            >
              EXPERIENCE
            </Nav.Link>
            <Nav.Link
              className={` ${
                currentLink === "projects"
                  ? "active-navbar-link"
                  : "navbar-link"
              } ${scrolled ? "scrolled" : ""}`}
              onClick={() => handleNavLinkClick("projects")}
            >
              PROJECTS
            </Nav.Link>
            <Nav.Link
              className={` ${
                currentLink === "contact" ? "active-navbar-link" : "navbar-link"
              } ${scrolled ? "scrolled" : ""}`}
              onClick={() => handleNavLinkClick("contact")}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
