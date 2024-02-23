import React from 'react'
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Experience() {
  return (
    <div id="experience" className='experience'>
    <div className='section-title'>EXPERIENCE</div>
    <Container class='experience-section'>
        <Row className='item'>
          <Col lg={4} className="title text-center">
            <div className='left-block'>
            <h3>Women in Technology Mentorship and Development Intern</h3>
            <h6>Jan. 2024 – Jun. 2024</h6>
            </div>
          </Col>

          <Col className='event' lg={7}>
            <div className='right-block'>
              <h2>Scotiabank</h2>
              <h6>Toronto, Canada</h6>
              <ul className='listItems'>
                <li>Developed key skills, including resume building, elevator pitch creation, and interview techniques</li>
                <li>Collaborated with experienced mentor to receive personalized guidance and actively contributed to discussions on the experiences and challenges of women working in technology</li>
                <li>Participated in speaker panels featuring industry leaders, providing valuable insights into the technology field</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className='item'>
          <Col lg={4} className="title text-center">
            <div className='left-block'>
            <h3>Team EMQ & Intel Tech Intern</h3>
            <h6>May 2023 – Jul. 2023</h6>
            </div>
          </Col>

          <Col className='event' lg={7}>
            <div className='right-block'>
              <h2>Teamwork Global · University of Warwick</h2>
              <h6>Remote</h6>
              <ul className='listItems'>
                <li>Analyzed the characteristics of MQTT over QUIC protocols through testing and benchmarking using virtual machines</li>
                <li>Simulated network environments with over 20 distinct packet-dropping conditions to evaluate the protocol’s performance</li>
                <li>Demonstrated the functionality and working of MQTT and QUIC on Intel AIXBoard for IoV scenario</li>
              </ul>
            </div>
          </Col>
        </Row>

      <Row className='item'>
        <Col lg={4} className="title text-center">
            <div className='left-block'>
            <h3>English Language Instructor</h3>
            <h6>Jul. 2020 – Aug. 2022</h6>
            </div>
        </Col>
        <Col className='event' lg={7}>
            <div className='right-block'>
            <h2>Community Tutoring</h2>
            <h6>Hsinchu, Taiwan</h6>
            <ul className="listItems">
                <li>Assisted adults with formal writing essential for the workplace, guiding structure, clarity, and effective communication</li>
                <li>Practiced English conversation and writing mechanics with children in an engaging manner</li>
                <li>Prepared students for TOEIC and GEPT exams</li>
            </ul>
            </div>
        </Col>
      </Row>

      <Row className='item'>
        <Col lg={4} className="title text-center">
            <div className='left-block'>
            <h3>Coding Camp Teaching Instructor</h3>
            <h6>Jul. 2022 – Aug. 2022</h6>
            </div>
        </Col>
        <Col className='event' lg={7}>
            <div className='right-block'>
            <h2>CodingAPE</h2>
            <h6>Hsinchu, Taiwan</h6>
            <ul className="listItems">
                <li>Led engaging discussion sections for 30+ students, fostering collaborative group discussions, and provided personalized
support for their Python final projects</li>
                <li>Reviewed course materials with the lead instructor and organized students into groups based on their learning progress</li>
            </ul>
            </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Experience;