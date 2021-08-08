import React from "react"
import data from "../yourdata"

const BackendSkills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Back End Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
                
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackendSkills