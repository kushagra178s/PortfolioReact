import React from "react";
import { ThemeContext } from "./Main";
function Skills() {
  const theme = ThemeContext._currentValue.theme;
  // console.log(ThemeContext._currentValue.theme);
  return (
    <div
      className="main"
      style={{
        backgroundColor: `${theme == "light" ? "white" : "#193D3D"}`,
        color: `${theme == "light" ? "black" : "white"}`,
      }}
    >
      <p
        style={{
          padding:"2%",
          textAlign:"center",
          paddingTop: "10px",
          marginLeft: "15px",
        }}
      >
        <h1>
        <strong>
          <u>Technical Skills: </u>
        </strong>
        </h1>
       
      </p>
      <div className="technical-skills">
        <div className="skill-container">
          <strong>Languages:</strong>
          <p className="skills-showcase">
            <div className="skill-card">Python</div>
            <div className="skill-card"> C++</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">C</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">mySQL</div>
          </p>
        </div>
        <div className="skill-container">
          <strong>Technologies: </strong>
          <p className="skills-showcase">
            <div className="skill-card">GitHub</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">MongoDB</div>
            <div className="skill-card">Express</div>
            <div className="skill-card">ReactJS</div>
            <div className="skill-card">NodeJS</div>
            <div className="skill-card">SpringBoot</div>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Skills;
