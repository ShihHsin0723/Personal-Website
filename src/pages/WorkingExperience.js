import React from 'react'
import MainLayout from '../layout/MainLayout'
import "../styles/main.css";

function WorkingExperience() {
  return (
    <div>
        <MainLayout>
          <div className="items">
            <div className="experience">
            <div className="work">
              <div className="image">
                <img className="image2" src="/warwick.png" alt="internship"></img>
              </div>
              <div>
                <h1 className="title">TEAMWORK 2023 VIRTUAL INTERNATIONAL INTERN</h1>
                <h2 className="organization">University of Warwick</h2>
                <h4 className="details">Apr 2023 - Jul 2023</h4>
                <br />
                <ul className="listItems">
                  <li>Worked with a multidisciplinary team of students from around the world</li>
                  <li>Conducted a thorough analysis of the current MQTT over QUIC protocol, identifying areas of improvement</li>
                  <li>Tested and ran benchmarks against the existing MQTT protocol using Intel's AIxBoard</li>
                </ul>
              </div>
            </div>

            <div className="work">
              <div className="image">
                <img className="image2" src="/codingAPE.png" alt="coding"></img>
              </div>
              <div>
                <h1 className="title">CODING CAMP TEACHING ASSISTANT</h1>
                <h2 className="organization">CodingAPE Summer School</h2>
                <h4 className="details">Jul 2021 - Aug 2021</h4>
                <br />
                <ul className="listItems">
                  <li>Helped students in Python project-building</li>
                  <li>Led small group discussion and observed students' learning progress</li>
                </ul>
              </div>
            </div>

            <div className="work">
              <div className="image">
                <img className="image2" src="/tutor.png" alt="private"></img>
              </div>
              <div>
                <h1 className="title">ENGLISH TUTOR</h1>
                <h2 className="organization">Comunity Tutoring</h2>
                <h4 className="details">Jul 2020 - Sep 2022</h4>
                <br />
                <ul className="listItems">
                  <li>Assisted adults who require formal writing in the workplace</li>
                  <li>Practiced English conversation and writing mechanics with children</li>
                </ul>
              </div>
            </div>

            <div className="work">
              <div className="image">
                <img className="image2" src="/huaxing.png" alt="academy"></img>
              </div>
              <div>
                <h1 className="title">STUDENT RECRUITMENT ASSISTANT</h1>
                <h2 className="organization">Huaxing Academy</h2>
                <h4 className="details">May 2022 - Sep 2022</h4>
                <br />
                <ul className="listItems">
                  <li>Conducted telephone survey and communicated with students and parents</li>
                  <li>Sorted files/data using Microsoft Excel and Word</li>
                </ul>
              </div>
            </div>
            </div>
          </div>

        </MainLayout>
    </div>
  )
}

export default WorkingExperience