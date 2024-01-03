import React from "react";
import {ThemeContext} from "./Main";
function Skills() {
  const theme = ThemeContext._currentValue.theme;
  // console.log(ThemeContext._currentValue.theme);
  return (
    <div className="main" style={{backgroundColor:`${theme=="light"?"white":"#193D3D"}`, color:`${theme=="light"?"black":"white"}`}}>
      <div className="about-me">
        <h2>
          <strong>
            <u>Technical Skills: </u>
          </strong>
        </h2>
        <p style={{ marginLeft:"15px", marginTop: "10px", fontSize: "20px", fontWeight: "500" }}>
          <em>
            <strong>Languages:</strong> Python , C++ , Java , C , JavaScript ,
            mySQL
            <br />
            <strong>Technologies / Frameworks / Libraries / Tools: </strong> GitHub ,
            Git , MongoDB , Express , ReactJS , NodeJS, SpringBoot
          </em>
        </p>
        <br />
      </div>
    </div>
  );
}

export default Skills;
