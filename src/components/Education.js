import React from "react";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Education() {
  return (
    <div id="education" className="education">
      <div className="section-title">EDUCATION</div>
      <Container class="education-section">
        <Row className="item">
          <Col lg={4} className="title text-center">
            <div className="left-block">
              <h3>Bachelor's Degree</h3>
              <h4>Computer Science Specialist</h4>
              <h5>Focus in AI</h5>
              <h5>Statistics Minor</h5>
              <h6>Sept. 2022 - May 2026</h6>
            </div>
          </Col>

          <Col className="event" lg={7}>
            <div className="right-block">
              <h2>University of Toronto - Trinity College</h2>
              <h6>Toronto, Canada</h6>
              <p>
                cGPA: 3.95/4.00 &nbsp; | &nbsp; Dean’s List Scholar &
                Chancellor’s Scholarship
              </p>
              <ul className="listItems">
                <li>
                  Preparation for Research through Immersion, Skills, and
                  Mentorship (PRISM)
                </li>
                <li>Learn AI Program</li>
                <li>Google Developer Club Mentorship Program</li>
                <li>UT MIST Hackathon</li>
                <li>
                  Only Human Dance Company Marketing/Social Media Director
                </li>
                <li>Note-Taking Volunteering for Accessibility Services</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="item">
          <Col lg={4} className="title text-center">
            <div className="left-block">
              <h3>High School Diploma</h3>
              <h6>Aug. 2019 - May 2022</h6>
            </div>
          </Col>
          <Col className="event" lg={7}>
            <div className="right-block">
              <h2>Hsinchu International School</h2>
              <h6>Hsinchu, Taiwan</h6>
              <p>GPA: 4.00/4.00 &nbsp; | &nbsp; Scored 5/5 on 10 AP Exams</p>
              <ul className="listItems">
                <li>Mathematics Competition Team</li>
                <li>Model United Nations (Head of Administration)</li>
                <li>Web & App Development Club</li>
                <li>Academic Resource Center Tutor</li>
                <li>International Chamber Orchestra Club (Executive)</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="item">
          <Col lg={4} className="title text-center">
            <div className="left-block">
              <h3>High School</h3>
              <h6>Aug. 2018 - Jun. 2019</h6>
            </div>
          </Col>
          <Col className="event" lg={7}>
            <div className="right-block">
              <h2>Niskayuna High School</h2>
              <h6>New York, United States</h6>
              <p>Grade: 97.5 </p>
              <ul className="listItems">
                <li>Academic Resource Center Tutor</li>
                <li>Peregrine Senior Living at Clifton Park Volunteer</li>
                <li>School of the Arts at The National Museum of Dance</li>
                <li>
                  The Capital District of New York Festival of Nations Performer
                </li>
                <li>
                  Capital Region BOCEs 30th Annual Art Show Selected Participant
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
