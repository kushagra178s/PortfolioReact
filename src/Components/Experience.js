import React from "react";
import { ThemeContext } from "./Main";
function Experience() {
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
      <div className="experience">
        <h2>
          <strong>
            <u>Experience: </u>
          </strong>
        </h2>
        <div className="experience-card">
          <div className="experience-company">
            <div>Deskera</div>
            <div>[June 2023 - July 2023]</div>
            <div>SDE Intern</div>
            <div>(Remote, Singapore)</div>
          </div>
          <div className="experience-description" >
            • Contributed to the development of an intelligent web-based
            assistant tool facilitating smooth data migration to the company's
            software.
            <br />
            <br />
            • Focused on enhancing the chat system, optimizing the user
            interface, and building reusable components for data uploads.
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}
export default Experience;
