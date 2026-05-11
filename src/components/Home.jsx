import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const heroLine =
  "Turning research ideas and random late-night thoughts into AI-powered systems.";

function Home() {
  const [typedHeroLine, setTypedHeroLine] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setTypedHeroLine(heroLine);
      return undefined;
    }

    let index = 0;
    let intervalId;
    const startDelay = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setTypedHeroLine(heroLine.slice(0, index));

        if (index >= heroLine.length) {
          window.clearInterval(intervalId);
        }
      }, 34);
    }, 760);

    return () => {
      window.clearTimeout(startDelay);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="banner" id="home">
      <div className="banner-inner">
        <div className="name">
          <h1 className="name name1">Shih-Hsin Chuang</h1>
          <h2 className="name name2">Phoebe</h2>
        </div>
        <p className="hero-summary" aria-label={heroLine}>
          <span aria-hidden="true">{typedHeroLine}</span>
        </p>

        <div className="social-icon">
          <a
            href="https://github.com/ShihHsin0723"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span>
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </span>
          </a>
          <a
            href="mailto:shihhsinchuang@gmail.com"
            rel="noreferrer"
            aria-label="Email"
          >
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/shih-hsin-chuang/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span>
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
