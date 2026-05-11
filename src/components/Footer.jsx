import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/footerLogo.png";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-inner">
          <a href="#home" className="footer-mark" aria-label="Back to home">
            <img src={logo} alt="" className="footer-logo" />
            <span>Phoebe Chuang</span>
          </a>

          <div className="footer-socials">
            <a
              href="https://github.com/ShihHsin0723"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:shihhsinchuang@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.linkedin.com/in/shih-hsin-chuang/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

          <p className="copyright-text">© {year} Shih-Hsin Chuang</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
