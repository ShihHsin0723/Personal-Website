import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Education() {
  return (
    <div id="education" className="education">
      <div className="section-title">EDUCATION</div>
      <Container className="education-section">
        <Row className="item">
          <Col lg={4} className="title text-center">
            <div className="left-block">
              <h3>Honours Bachelor of Science</h3>
              <h4>Computer Science Specialist</h4>
              <h5>Focus in AI & Statistics Minor</h5>
              <h6>Sept. 2022 - 2026</h6>
            </div>
          </Col>

          <Col className="event" lg={7}>
            <div className="right-block">
              <h2>University of Toronto St. George Campus - Trinity College</h2>
              <h6>Toronto, Canada</h6>
              <p>
                cGPA: 3.93/4.00 &nbsp; | &nbsp; Dean’s List Scholar &
                Chancellor’s Scholarship
              </p>
              <ul className="listItems">
                <li>
                  Relevant coursework: Machine Learning, Neural Networks,
                  Computer Vision, Natural Language Processing, Probability &
                  Statistics
                </li>
                <li>
                  Additional coursework: Databases, Data Structures &
                  Algorithms, Software Design, Operating Systems
                </li>
                <li>
                  Leadership & community: Computer Science Student Union
                  mentor, Only Human Dance Company executive, UTMIST &
                  UofTHacks hackers
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
