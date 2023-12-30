import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/footerLogo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={12} lg={1} className="text-center mb-3 mb-lg-0">
            <a href="#home">
              <img src={logo} alt="Logo" className="footer-logo" />
            </a>
          </Col>

          <Col md={12} lg={11} className="d-flex justify-content-center justify-content-lg-end">
            <div className="footer">
              <a href='https://github.com/ShihHsin0723' target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faGithub} /></span>
              </a>
              <a href='mailto:shihhsinchuang@gmail.com'>
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
              </a>
              <a href='https://www.linkedin.com/in/shih-hsin-chuang/' target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={12}>
            <p className="text-center copyright-text">Copyright © {year} SHIH-HSIN CHUANG. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
