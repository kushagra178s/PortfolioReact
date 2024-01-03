import React, { useState } from "react";
import data from './Data.json';
import ProjectCard from "./ProjectCard";
function Projects() {
  const newData = [...data].sort(function (a, b) {
    if(a.Priority == b.Priority) {
      return b.liveLink.length - a.liveLink.length;
    }
    return a.Priority - b.Priority;
  }); 
  // console.log(newData[0].Priority);
  return (
    <div className="main">
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
