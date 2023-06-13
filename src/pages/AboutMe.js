import React from 'react'
import MainLayout from '../layout/MainLayout'
import "../styles/main.css";

function AboutMe() {
  return (
    <div>
        <MainLayout>
        <div>
            <img src="/ProfilePic.jpg" alt="Me" className="profilePic"></img>
            <h1 className="myName">Shih-Hsin (Phoebe) Chuang</h1>
            <div className="biography">
                <h2>Short Biography</h2>
                <br />
                I am a second-year undergraduate student pursuing a computer science specialist program at the University of Toronto. 
                As an international student, I have always transferred between schools across different countries. 
                However, my unwavering passion for programming is something that has never changed.
                I am actively seeking opportunities to apply my expertise and make a valuable contribution to the tech industry, which stands at the forefront of innovation and has a tangible impact on society.
                <br />
                <br />
                During my first-year academic journey at the University of Toronto, I was part of a movie recommendation system project that utilizes collaborative filtering to offer personalized movie recommendations by analyzing user similarities. 
                As the main back-end developer, I was responsible for conducting research in the problem domain, designing effective algorithms, and training and testing datasets to ensure the model’s accuracy. 
                This project not only deepened my understanding of graph abstract data type but also heightened my attention to details and equipped me with essential project management skills.
                <br /><br />
                Furthermore, I participated in Hack the MIST (hackathon) to gain practical problem-solving experience. 
                Our team developed a NLP program that analyzes the complexity of articles and filters them according to the desired age group for suitable reading levels. 
                Initially, we encountered a running time issue due to the large dataset. 
                However, I was able to improve the performance significantly after analyzing and restructuring the algorithm. 
                This hackathon provided me with valuable networking opportunities, allowing me to interact and learn from experienced upper-year students and professionals. 
                Above all, it prepared me to effectively collaborate within a team under tight time constraints and high-pressure situations. 
                <br /><br />
                By working as a teaching assistant at CodingAPE summer school, I closely observed each student’s learning progress and learned how to handle any unexpected situations. 
                I led small group discussions and brainstormed with them for Python project-building ideas. 
                This working experience has strengthened my leadership skills and enhanced my ability to effectively communicate, support, and inspire others in their learning journeys.
                <br /><br />
                In my spare time, I continuously pursue new areas that I have yet to try. 
                Currently, I am learning website development with ReactJS and exploring more programming languages to enhance my technical skills. 
                With the experiences and qualities mentioned above, I believe that my resilience and willingness to learn will enable me to maximize my value to this dynamic industry and contribute to the success of your company.    
            </div>
        </div>
        </MainLayout>
    </div>
  )
}

export default AboutMe