import React from "react";

const ProjectCard = (props) => {
  console.log(props.props.githublink);
  return (
    <div className="card">
      <div className="picture-container">
        <img src = {require("./pictures/"+props.props.pictures[0])} alt="" />
      
      </div>
      <h2 className="card-title">{props.props.title}</h2>
      <p>Tech Stack: [ {props.props.techStack} ]</p>
      <p>
        <a
          href={props.props.githublink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <em><u>Github Link</u></em>
        </a>
      </p>
      {props.props.liveLink.length>0?(<p>
        
        <a
          href={props.props.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Link
        </a>
      </p>):("")}
      {/* <p>Priority: {props.props.priority}</p> */}
      {props.props.videoLink.length>0?<p>
        Video Link:{" "}
        <a
          href={props.props.videoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.props.videoLink}
        </a>
      </p>:("")}

      <h2>Project Description:</h2>
      <ul style={{listStyle:"inherit", padding:"15px"}}>
        {props.props.projectDescription.map((item, index) => (
          <li  key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
