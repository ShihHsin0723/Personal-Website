import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    title: "AI Journaling Companion",
    label: "UofTHacks13",
    summary:
      "A multi-model journaling app that routes entries through Gemini and maintains weekly context with Backboard SDK.",
    highlights: [
      "Model routing and thread-based memory",
      "Emotion detection with Amazon Rekognition",
      "Text-to-speech journaling with ElevenLabs",
    ],
    stack: ["Node.js", "Gemini API", "Backboard SDK", "Amazon Rekognition"],
    repoUrl: "https://github.com/ShihHsin0723/UofTHacks13",
  },
  {
    title: "Radiomics DL Adnexal Mass Classification",
    label: "Medical Imaging ML",
    summary:
      "A radiomics-enhanced deep learning framework for classifying benign and malignant adnexal masses from ultrasound images.",
    highlights: [
      "EfficientNet-B0 with radiomic feature maps",
      "Noise robustness under speckle and Gaussian noise",
      "Improved diagnostic metrics over baseline CNN",
    ],
    stack: ["Python", "PyTorch", "PyRadiomics", "OpenCV"],
    repoUrl:
      "https://github.com/ShihHsin0723/Radiomics-DL-Adnexal-Mass-Classification",
  },
  {
    title: "Predictive Learning Model for Educational Diagnostics",
    label: "Machine Learning",
    summary:
      "A collection of predictive models for educational diagnostics using student-response data and model comparison.",
    highlights: [
      "KNN, IRT, matrix factorization, and neural nets",
      "Model comparison on student-response data",
      "Predictive support for education decisions",
    ],
    stack: ["Python", "Neural Networks", "Matrix Factorization", "KNN"],
    repoUrl:
      "https://github.com/ShihHsin0723/Predictive-Learning-Model-for-Educational-Diagnostics",
  },
  {
    title: "CSSU Rewards System - OnPointe",
    label: "Full-Stack Platform",
    summary:
      "A student rewards and event management platform for CSSU, supporting points, purchases, promotions, friends, and RSVPs.",
    highlights: [
      "JWT auth and role-based workflows",
      "PostgreSQL, Prisma, and Cloudinary uploads",
      "Student, cashier, manager, and superuser flows",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
    repoUrl: "https://github.com/ShihHsin0723/CSSU-Rewards-System---OnPointe",
  },
  {
    title: "Friendify",
    label: "Spotify Matching",
    summary:
      "A friend-matching app that connects users based on similarities between selected Spotify playlists.",
    highlights: [
      "Title, artist, genre, and audio-feature matching",
      "Playlist similarity scoring",
      "Mutual acceptance profile unlock flow",
    ],
    stack: ["Java", "Spotify API", "JUnit"],
    repoUrl: "https://github.com/ShihHsin0723/Friendify",
  },
  {
    title: "Films for You",
    label: "Recommendation System",
    summary:
      "A movie recommendation system that uses collaborative filtering to suggest films from user history and community reviews.",
    highlights: [
      "Collaborative filtering from user history",
      "Tkinter interface for recommendations",
      "User-submitted ratings and review entry",
    ],
    stack: ["Python", "Tkinter", "pandas", "Collaborative Filtering"],
    repoUrl: "https://github.com/ShihHsin0723/Films-for-You",
  },
];

function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="section-title">PROJECTS</div>
      <p className="section-subtitle">
        What I’ve worked on over the years!
      </p>

      <Container>
        <Row className="justify-content-center">
          {projects.map((project) => (
            <Col key={project.title} md={10} xl={4} className="mb-4 d-flex">
              <Card className="project-card ai-project-card">
                <Card.Body>
                  <div className="project-heading">
                    <p className="project-label">{project.label}</p>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>GitHub</span>
                    </a>
                  </div>
                  <Card.Title className="project-title">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="project-summary">
                    {project.summary}
                  </Card.Text>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
