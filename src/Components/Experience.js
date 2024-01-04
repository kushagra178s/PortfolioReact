import React from "react";
import {ThemeContext} from "./Main";
function Experience() {
  const theme = ThemeContext._currentValue.theme;
  // console.log(ThemeContext._currentValue.theme);
  return (
    <div className="main" style={{backgroundColor:`${theme=="light"?"white":"#193D3D"}`, color:`${theme=="light"?"black":"white"}`}}>
      <div className="about-me">
        <h2>
          <strong>
            <u>Experience: </u>
          </strong>
        </h2>
        <p style={{ marginLeft:"15px", marginTop: "10px", fontSize: "20px", fontWeight: "500" }}>
          <em  >
            <strong>Deskera </strong> [June 2023 - July 2023]
            <br />
           <p><strong>Software Development Engineer Intern  </strong>  (Remote, Singapore)
            </p>  
            <br />
            <p style={{marginBottom:"5px"}}>
            • Contributed to the development of an intelligent web-based assistant tool facilitating smooth data migration to the
                company's software.
            </p>
            <p>
            • Focused on enhancing the chat system, optimizing the user interface, and building reusable components for data uploads.
            </p>                
          </em>
        </p>
        <br />
      </div>
    </div>
  );
}
export default Experience ;
