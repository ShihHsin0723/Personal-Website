import React from 'react'
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import films from '../images/films.png'
import Spotify from '../images/Spotify2.png'
import website from '../images/website.png'

function Projects() {
  return (
    <div id="projects" className='projects'>
      <div className="section-title">PROJECTS</div>

      <Container>
        <Row className="justify-content-center">
          <Card className="mx-3 mb-3 p-0" style={{ width: '18rem' }}>
            <Card.Img className="p-0" style={{ height: '200px', objectFit: 'cover' }} variant="top" src={Spotify} />
            <Card.Body>
              <Card.Title className='project-title'>Friendify</Card.Title>
              <Card.Text>
                A friend-making app that matches users based on the similarities between their Spotify playlists with four distinct matching strategies.
              </Card.Text>
              <Button href="https://github.com/ShihHsin0723/Friendify" target='_blank' className='project-btn'>More Details</Button>
              <Card.Text className='project-skills'>Java · Spotify API · JUnit</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mx-3 mb-3 p-0" style={{ width: '18rem' }}>
            <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src={website} />
            <Card.Body>
              <Card.Title className='project-title'>Personal Website</Card.Title>
              <Card.Text>
                A dynamic and interactive personal website built from ReactJS library and Bootstrap framework to showcase my experience, skills, and projects.
              </Card.Text>
              <Button href="https://github.com/ShihHsin0723/Personal-Website" target='_blank' className='project-btn'>More Details</Button>
              <Card.Text className='project-skills'>HTML/CSS · ReactJs · Boostrap</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mx-3 mb-3 p-0" style={{ width: '18rem' }}>
            <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src={films} />
            <Card.Body>
              <Card.Title className='project-title'>Films for You</Card.Title>
              <Card.Text>
                A movie finder that generates personalized movie recommendations with specified movie genres and has the option for writing movie reviews.
              </Card.Text>
              <Button href="https://github.com/ShihHsin0723/Films-for-You" target='_blank' className='project-btn'>More Details</Button>
              <Card.Text className='project-skills'>Python · Tkinter · pandas</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;