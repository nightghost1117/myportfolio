import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="skill-overlay">
          <div className="skill-text">VS Code</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="skill-overlay">
          <div className="skill-text">Postman</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="skill-overlay">
          <div className="skill-text">Vercel</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div className="skill-overlay">
          <div className="skill-text">Netlify</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div className="skill-overlay">
          <div className="skill-text">Heroku</div>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
