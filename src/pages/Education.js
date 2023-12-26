import React from 'react'
import MainLayout from '../layout/MainLayout'
import "../styles/main.css";

function Education() {
  return (
    <div>
        <MainLayout>
            <div className="items">
                <br />
                <h1>University</h1>
                <br />
                <a href="https://www.utoronto.ca/" alt="Trinity College Link"><h2>University of Toronto St. George - Trinity College</h2></a>
                <h2 className="organization">Computer Science Specialist</h2>
                <div className="education">
                    <div className="education-group">
                        <div className="text">Expected Graduation: Jun 2026</div>
                        <div className="text">cGPA: 4.0/4.0</div>
                        <div className="text">Activities:</div>
                            <ul className="listItems">
                                <li>Google Developer Club Mentorship Program</li>
                                <li>Computer Science Student Union</li>
                                <li>UT MIST Hackathon</li>
                                <li>UofT Dance Festival performer</li>
                                <li>Note-taking volunteer</li>
                            </ul>
                    </div>
                    <div className="education-group">
                        <img className="image1" src="/Trinity.jpeg" alt='college'></img>
                    </div>
                </div>
                
                <br /><br />
                <hr />
                <br /><br /><br />
                <h1>High School</h1>
                <br />
                <a href="https://hdis.hc.edu.tw/" alt="HIS"><h2>Hsinchu International School</h2></a>
                <div className="education">
                    <div className="education-group">
                        <div className="text">Aug 2019 - May 2022</div>
                        <div className="text">GPA: 4.0/4.0</div>
                        <div className="text">Activities:</div>
                            <ul className="listItems">
                                <li>Mathematics Competition Team</li>
                                <li>Model United Nations (Head of Administration)</li>
                                <li>Web & App Development Club</li>
                                <li>Academic Resource Center Tutor</li>
                                <li>International Chamber Orchestra Club</li>
                            </ul>
                    </div>
                    <div className="education-group">
                        <img className="image1" src="/HIS.jpeg" alt="highschool"></img>
                    </div>
                </div>
                
                <br /><br />
                <a href="https://www.niskayunaschools.org/niskayuna-high-school/" alt="Nisky"><h2>Niskayuna High School</h2></a>
                <div className="education">
                    <div className="education-group">
                        <div className="text">Aug 2018.08 - Jun 2019</div>
                        <div className="text">GPA: 4.0/4.0</div>
                        <div className="text">Activities:</div>
                            <ul className="listItems">
                                <li>Academic Resource Center Tutor</li>
                                <li>Peregrine Senior Living at Clifton Park volunteer</li>
                                <li>School of the Arts at The National Museum of Dance</li>
                                <li>The Capital District of New York Festival of Nations performer</li>
                                <li>Capital Region BOCEs 30th Annual Art Show</li>
                            </ul>
                    </div>
                    <div className="education-group">
                        <img className="image1" src="/NSHS.jpeg" alt="highschool1"></img>
                    </div>
                </div>
                <br /><br />
            </div>
        </MainLayout>
    </div>
  )
}

export default Education