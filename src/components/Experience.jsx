import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    location: "Vancouver, Canada",
    date: "May 2025 - July 2025",
    bullets: [
      "Developed an agentic AI on-call assistant for AWS RDS using the Model Context Protocol to automate root cause analysis.",
      "Standardized incident response workflows for multiple cross-functional engineering teams.",
      "Achieved 93% accuracy in root cause analysis and SOP recommendations during live testing with on-call engineers.",
    ],
  },
  {
    role: "Undergraduate Researcher - Natural Language Processing & Databases",
    company: "Vector Institute · Dr. Anna Goldenberg",
    location: "Toronto, Canada",
    date: "Jan. 2025 - Present",
    bullets: [
      "Building a RAG-based system that translates natural language queries into SQL for multimodal healthcare datasets.",
      "Integrated FAISS retrieval, schema-aware context, and a dynamic knowledge base to support structured data querying.",
      "Applied prompt engineering and user feedback loops to improve SQL accuracy across multi-table joins and schema alignment.",
      "Enabled cross-cohort analysis across survey, clinical, and wearable data with outputs for visualization and validation.",
    ],
  },
  {
    role: "Undergraduate Researcher - Medical Imaging & Machine Learning",
    company: "MiDATA Lab · Dr. Pascal Tyrrell",
    location: "Toronto, Canada",
    date: "Sept. 2024 - April 2025",
    bullets: [
      "Developed a radiomics-incorporated CNN model in PyTorch to classify adnexal masses using transfer learning.",
      "Trained on 2,658 ultrasound images from 243 patients with robust resampling and augmentation pipelines.",
      "Improved baseline performance by 10% accuracy and 15% AUC while addressing class imbalance.",
      "Validated model performance with 5-fold cross-validation, bootstrap resampling, and noise robustness testing.",
    ],
  },
  {
    role: "Full-Stack Software Engineer Intern",
    company: "Crypto-Arsenal",
    location: "Taipei, Taiwan (Remote)",
    date: "April 2024 - Dec. 2024",
    bullets: [
      "Developed full-stack features for ZKE, a top-100 global cryptocurrency exchange.",
      "Built dynamic UI components with TypeScript, React, and Tailwind CSS while optimizing backend operations with Node.js and GraphQL.",
      "Enhanced team productivity through detailed code reviews and active participation in Scrum meetings.",
    ],
  },
];

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="section-title">EXPERIENCE</div>
      <Container className="experience-section">
        {experiences.map((experience) => (
          <Row className="item" key={`${experience.role}-${experience.company}`}>
            <Col lg={4} className="title text-center">
              <div className="left-block">
                <h3>{experience.role}</h3>
                <h6>{experience.date}</h6>
              </div>
            </Col>

            <Col className="event" lg={7}>
              <div className="right-block">
                <h2>{experience.company}</h2>
                <h6>{experience.location}</h6>
                <ul className="listItems">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Experience;
