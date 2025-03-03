import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img className="project-img" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <p className="project-title">{props.title}</p>
        <div className="project-text" style={{ textAlign: "justify" }}>
          {props.description}
        </div>
        {/* <Button className="project-button" variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </div>
  );
}
export default ProjectCard;
