import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img className="project-img" variant="top" src={props.imgPath} alt="card-img" onClick={() => window.open(props.ghLink, "_blank")} />
      <Card.Body>
        <p className="project-title">{props.title}</p>
        <div className="project-text" style={{ textAlign: "justify" }}>
          {props.description}
        </div>
      </Card.Body>
    </div>
  );
}
export default ProjectCard;
