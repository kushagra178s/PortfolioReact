import React from 'react';
import {ThemeContext} from "./Main";
function About() {
  const theme = ThemeContext._currentValue.theme;
  // console.log(ThemeContext._currentValue.theme);

  return (
    <div className="main" style={{backgroundColor:`${theme=="light"?"white":"#193D3D"}`, color:`${theme=="light"?"black":"white"}`}}>
      <div className="about-me">
        <h2>
          <strong>
            <u>Intoduction: </u>
          </strong>
        </h2>
        <p style={{paddingTop:"5%",marginLeft:"15px", marginTop:"10px", fontSize:"20px", fontWeight:"500"}}>
          <em>
            {" "}
            My name is kushagra sharma currently pursuing B.tech in computer science engineering. I am seeking career opportunities in an organization that fosters growth, learning, and meaningful projects with a global impact. Committed to working diligently and continuously learning to excel in my endeavors.
            <br /> Currently, I specialize in <strong>React.js</strong> and <strong>Node.js</strong>  actively developing projects and exploring these technologies. Additionally, I possess proficiency in <strong>Data structures & Algorithms</strong> and databases, including <strong>MySQL</strong>.
          </em>
        </p>
        <br />
      </div>
    </div>
  );
}

export default About ;
