import React, { useState } from "react";
import Project from "./project";
function Projects() {
  const [projectData, setProjectData] = useState([]);
  return (
    <div className="main">
      {/* <!-- aboutme --> */}
      <div class="about-me">
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
      <div className="projects-section">
        {projectData.map((item) => {
          return <Project />;
        })}
      </div>
    </div>
  );
}
export default Projects;
