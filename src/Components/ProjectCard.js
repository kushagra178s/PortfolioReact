import React, { useState } from "react";

const ProjectCard = (props) => {
  // console.log(props.props.githublink);
  const [imagesIndex, setImagesIndex] = useState(0);
  const numberOfImages = props.props.pictures.length;

  function handleImagesSlider(action) {
    if(action==1) {
      setImagesIndex( ((imagesIndex+1)%numberOfImages));
    }
    else {
      let newImagesIndex = imagesIndex;
      if(imagesIndex-1 < 0) {
        newImagesIndex = numberOfImages;
      }
      setImagesIndex( ((newImagesIndex-1)%numberOfImages))
    }
  }

  return (
    <div className="card">
      <div className="picture-container">
        {numberOfImages>1?<button onClick={()=>(handleImagesSlider(-1))}>⬅️</button>:""}
        <img style={{width:numberOfImages>1?"90%":"100%"}} src={require("./pictures/" + props.props.pictures[imagesIndex])} alt="projectImages" />
        {numberOfImages>1?<button onClick={()=>(handleImagesSlider(1))}>➡️</button>:""}

      
      </div>
      <h2 className="card-title"><u>{props.props.title}</u></h2>
      <p className="card-title">Tech Stack: {props.props.techStack}</p>
      <div className="card-links">
        <p>
          <a
            href={props.props.githublink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>
              <u>Github Link</u>
            </em>
          </a>
        </p>
        {props.props.liveLink.length > 0 ? (
          <p>
            <a
              href={props.props.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <u><em>Live Link</em></u>
            </a>
          </p>
        ) : (
          ""
        )}
        {/* <p>Priority: {props.props.priority}</p> */}
        {props.props.videoLink.length > 0 ? (
          <p>
            Video Link:{" "}
            <a
              href={props.props.videoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.props.videoLink}
            </a>
          </p>
        ) : (
          ""
        )}
      </div>

      <h2>Project Description:</h2>
      <ul style={{ listStyle: "inherit", padding: "15px" }}>
        {props.props.projectDescription.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
