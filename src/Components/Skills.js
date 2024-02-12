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
          padding: "2%",
          textAlign: "center",
          paddingTop: "10px",
          marginLeft: "15px",
        }}
      >
        <h2>
          <strong>
            <u>Technical Skills: </u>
          </strong>
        </h2>
      </p>
      <div className="technical-skills">
        <div className="skill-container">
          <table>
            <tr>
            <td>
              <strong>Languages:</strong>
            </td>
            <td>
              <p className="skills-showcase">
                <div className="skill-card">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-python-20-1175115.png"
                    alt=""
                  />
                  Python
                </div>
                <div className="skill-card">
                  {" "}
                  <img src={require("../icons/c++.png")} alt="" /> C++
                </div>
                <div className="skill-card">
                  {" "}
                  <img src={require("../icons/java.png")} alt="" /> Java
                </div>
                <div className="skill-card">
                  {" "}
                  <img src={require("../icons/c.png")} alt="" /> C
                </div>
                <div className="skill-card">
                  {" "}
                  <img src={require("../icons/javascript.png")} alt="" />{" "}
                  JavaScript
                </div>
                <div className="skill-card">
                  {" "}
                  <img src={require("../icons/mysql.png")} alt="" /> SQL
                </div>
              </p>
            </td>
            </tr>
            <br />
            <tr>
            <td>
              <strong>Technologies:</strong>
            </td>
            <td>
            <p className="skills-showcase">
            <div className="skill-card">
              {" "}
              <img src={require("../icons/github.png")} alt="" /> GitHub
            </div>
            <div className="skill-card">
              {" "}
              <img src={require("../icons/git.png")} alt="" /> Git
            </div>
            <div className="skill-card">
              {" "}
              <img src={require("../icons/mongodb.png")} alt="" /> MongoDB
            </div>
            <div className="skill-card">
              {" "}
              <img src={require("../icons/express.png")} alt="" /> Express
            </div>
            <div className="skill-card">
              {" "}
              <img src={require("../icons/reactjs.png")} alt="" /> ReactJS
            </div>
            <div className="skill-card">
              {" "}
              <img src={require("../icons/nodejs.png")} alt="" /> NodeJS
            </div>
            <div className="skill-card">
              {" "}
              <img src={require("../icons/springbootpng.png")} alt="" />{" "}
              SpringBoot
            </div>
          </p>

            </td>
            </tr>
            
          </table>
        </div>
        <div className="skill-container">
          <table>
            
          </table>
         
          
        </div>
      </div>
      <br />
    </div>
  );
}

export default Skills;
