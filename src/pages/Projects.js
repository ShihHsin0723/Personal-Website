import React from 'react'
import MainLayout from '../layout/MainLayout'
import "../styles/main.css";

function Projects() {
  return (
    <div>
        <MainLayout>
          <div className="items">
            <br /><br />
            <div className="projects">
              <div className="project">
                <h1 className="title">Films For You</h1>
                <h3 className="organization">CSC111 Course Project</h3>
                <p className="description">
                  A movie recommendation system that uses collaborative filtering to offer movie recommendations by comparing a user’s behavior to others in the system.
                  Users can either receive movie recommendations with preferred movie genre or add their own movie reviews into the system. 
                </p>
              </div>
              <div className="project">
                <img className="image3" src="/films.png" alt="project"></img>
              </div>
            </div>
            <br /><br />
            <h3>For more details, please go to: <a href="https://github.com/PhoebeChuang0723" target="_blank" rel="noreferrer">github</a></h3>
            <br /><br /><br /><br /><br /><br />
          </div>
        </MainLayout>
    </div>
  )
}

export default Projects