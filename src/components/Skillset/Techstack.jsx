import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiMaterialui,
  SiGraphql,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiAntdesign
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <div className="skill-overlay">
          <div className="skill-text">HTML</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="skill-overlay">
          <div className="skill-text">Javascript</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="skill-overlay">
          <div className="skill-text">Node.js</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="skill-overlay">
          <div className="skill-text">React</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <div className="skill-overlay">
          <div className="skill-text">Redux</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <div className="skill-overlay">
          <div className="skill-text">MongoDB</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <div className="skill-overlay">
          <div className="skill-text">GraphQL</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAntdesign />
        <div className="skill-overlay">
          <div className="skill-text">Ant Design</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <div className="skill-overlay">
          <div className="skill-text">Material UI</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="skill-overlay">
          <div className="skill-text">Git</div>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
