import React from 'react';
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../images/profile.png';
import resume from '../images/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div id="about" className='about'>
      <div className="section-title-about">ABOUT</div>
      <Container>
        <Row className='intro-section'>
          <Col xl={4} className='d-flex align-items-center justify-content-center'>
            <img src={profile} alt="Profile" className="profile-pic" />
          </Col>
          <Col xl={8} className='intro d-flex align-items-center justify-content-center'>
            <p>
              I am a second-year student at the University of Toronto, specializing in computer science. My primary interests include artificial intelligence, software development, web development, and the list is still growing! I am equipped with independent learning skills and have extensive project-building experience to solve new problems in the tech world.
            </p>
          </Col>
        </Row>

        <Row className='profile-skills'>
          {/* Technical Skills Column */}
          <Col xl={7} lg={12} className='d-flex flex-column align-items-center justify-content-center'>
            <div className='subtitle'>TECHNICAL SKILLS</div>

            {/* List of skills and proficiency */}
            <Row className='profile-skills'>
              <Col md={6} className='text-center'>
                <ul className='skills-list'>
                  <li className='list-item'>
                    <span>Python</span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                    </span>
                  </li>
                  <li className='list-item'>
                    <span>Java</span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                    </span>
                  </li>
                </ul>
              </Col>
              <Col md={6} className='text-center'>
                <ul className='skills-list'>
                  <li className='list-item'>
                    <span>JS/HTML/CSS</span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='light-dot' />
                    </span>
                  </li>
                  <li className='list-item'>
                    <span>C/C++</span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='solid-dot' />
                      <FontAwesomeIcon icon={faCircle} className='light-dot' />
                      <FontAwesomeIcon icon={faCircle} className='light-dot' />
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Resume Column */}
          <Col xl={5} lg={12} className='text-center'>
            <div className='subtitle'>RESUME</div>
            {/* Button to open PDF */}
            <Button href={resume} target='_blank' className='btn resume-btn' rel='noopener noreferrer'>
              View Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;