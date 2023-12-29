import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCard.css"; // Import your existing CSS file for ProjectCard


const ProjectCard = (props) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(props.props.title);
  return (
    <div className="card">
      <div className="picture-container">
        {props.props.pictures.length > 1 ? (
          <Slider {...sliderSettings}>
            {props.props.pictures.map((picture, index) => (
              <div key={index}>
                <img src={require("./pictures/"+picture)} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </Slider>
        ) : (
          <img src={props.props.pictures[0]} alt={`Project 1`} />
        )}
      </div>
      <h2>{props.props.title}</h2>
      <p>Tech Stack: {props.props.techStack}</p>
      <p>
        Github Link:{" "}
        <a
          href={props.props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.props.githubLink}
        </a>
      </p>
      <p>
        Live Link:{" "}
        <a
          href={props.props.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.props.liveLink}
        </a>
      </p>
      <p>Priority: {props.props.priority}</p>
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

      <h3>Project Description:</h3>
      <ul>
        {props.props.projectDescription.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
