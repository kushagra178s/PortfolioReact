import React, { useState } from "react";
import {ThemeContext} from "./Main";
import data from './Data.json';
import ProjectCard from "./ProjectCard";
function Projects() {
  const theme = ThemeContext._currentValue.theme;
  // console.log(ThemeContext._currentValue.theme);
  const newData = [...data].sort(function (a, b) {
    if(a.Priority == b.Priority) {
      return b.liveLink.length - a.liveLink.length;
    }
    return a.Priority - b.Priority;
  }); 
  // console.log(newData[0].Priority);
  return (
    <div className="main" style={{backgroundColor:`${theme=="light"?"white":"#193D3D"}`, color:`${theme=="light"?"black":"white"}`}}>
      <h2 style={{padding:"2%", textAlign:"center",marginLeft:"15px", paddingTop:"15px"}}><b><u>Projects:</u></b></h2>
      <div className="projects-section">
        {newData.map((item) => {
          return <ProjectCard key={item.id} props={item}/>            
        })}
      </div>
    </div>
  );
}
export default Projects;
