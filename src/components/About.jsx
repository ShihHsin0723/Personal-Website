import React from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "../images/profile.png";
import resume from "../images/Resume.pdf";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "R", "Assembly"],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "LangChain",
      "FAISS",
      "Hugging Face",
      "RAG",
    ],
  },
  {
    title: "Data & Cloud",
    items: [
      "SQL",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "AWS (SageMaker, RDS, Lambda, S3)",
    ],
  },
  {
    title: "Full-Stack Tools",
    items: ["React", "Node.js", "GraphQL", "Git", "Linux"],
  },
];

function About() {
  return (
    <div id="about" className="about">
      <div className="section-title-about">ABOUT</div>
      <Container>
        <Row className="intro-section about-shell">
          <Col
            xl={4}
            className="d-flex align-items-center justify-content-center about-profile-column"
          >
            <img src={profile} alt="Profile" className="profile-pic" />
          </Col>
          <Col
            xl={8}
            className="intro d-flex flex-column justify-content-center"
          >
            <p className="about-lead">
              I am Phoebe, a University of Toronto Computer Science graduate
              with a focus in AI and a minor in Statistics.
            </p>
            <p className="about-copy">
              I’m passionate about building AI systems that bridge research and
              real-world impact. My interests span LLMs, healthcare AI, and
              scalable software engineering, with experience across research
              labs, startups, and large-scale infrastructure.
            </p>
          </Col>
        </Row>

        <Row className="profile-skills skills-shell">
          <Col
            xl={7}
            lg={12}
            className="d-flex flex-column justify-content-center"
          >
            <div className="subtitle">TECHNICAL SKILLS</div>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-card">
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col xl={5} lg={12} className="text-center">
            <div className="resume-panel">
              <div className="subtitle">CURRENT WORK</div>
              <p className="resume-copy">
                Recent work includes building an agentic AI on-call assistant
                for AWS RDS, developing a RAG-based natural language to SQL
                system for healthcare datasets, and training medical imaging
                models with PyTorch.
              </p>
              <Button
                href={resume}
                target="_blank"
                className="btn resume-btn"
                rel="noopener noreferrer"
              >
                View Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
