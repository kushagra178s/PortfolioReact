import React, { useState } from "react";
import data from './Data.json';
import ProjectCard from "./ProjectCard";
function Projects() {
  const newData = [...data].sort((a, b) => a.Priority - b.Priority); 
  // console.log(newData[0].Priority);
  return (
    <div className="main">
      <div className="about-me">
        <h2 >
          <strong>
            <u>About Me : </u>
          </strong>
        </h2>
        <p style={{marginTop:"10px", fontSize:"20px", fontWeight:"500"}}>
          <em>
            {" "}
            My name is kushagra sharma currently pursuing B.tech in computer science engineering. I am seeking career opportunities in an organization that fosters growth, learning, and meaningful projects with a global impact. Committed to working diligently and continuously learning to excel in my endeavors.
            <br /> Currently, I specialize in <strong>React.js</strong> and <strong>Node.js</strong>  actively developing projects and exploring these technologies. Additionally, I possess proficiency in <strong>Data structures & Algorithms</strong> and databases, including <strong>MySQL</strong>.
          </em>
        </p>
        <br />
      </div>
      <hr />
      <h2 style={{margin:"15px"}}><b><u>Projects:</u></b></h2>
      <div className="projects-section">
        {newData.map((item) => {
          return <ProjectCard key={item.id} props={item}/>            
        })}
      </div>
    </div>
  );
}
export default Projects;
