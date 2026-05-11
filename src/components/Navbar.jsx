import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const sections = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "education", label: "EDUCATION" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
];

function NavBar() {
  const [currentLink, setCurrentLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setCurrentLink("home");
        return;
      }

      const navbar = document.querySelector("nav.navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const scrollPosition = window.scrollY + navbarHeight + 24;

      for (const section of sections) {
        const target = document.getElementById(section.id);
        if (target) {
          const { offsetTop, offsetHeight } = target;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentLink(section.id);
            break;
          }
        }
      }
    };

    const onScroll = () => {
      handleScroll();
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavLinkClick = (event, link) => {
    event.preventDefault();
    setCurrentLink(link);
    const target = document.getElementById(link);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
      setExpanded(false);
    }
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={` ${scrolled ? "scrolled" : ""}`}
      aria-label="Primary"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={(event) => handleNavLinkClick(event, "home")}
        >
          Phoebe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={`#${currentLink}`}>
            {sections.map((section) => (
              <Nav.Link
                key={section.id}
                href={`#${section.id}`}
                active={currentLink === section.id}
                aria-current={currentLink === section.id ? "page" : undefined}
                className={` ${
                  currentLink === section.id ? "active-navbar-link" : "navbar-link"
                } ${scrolled ? "scrolled" : ""}`}
                onClick={(event) => handleNavLinkClick(event, section.id)}
              >
                {section.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
