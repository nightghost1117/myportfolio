import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import kc from "../assets/img/kc.PNG";
import solana from "../assets/img/solana.png";
import kv from "../assets/img/kv.PNG";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="">
            <ProjectCard
              imgPath={kc}
              isBlog={false}
              title="Kitchen Design"
              description="The Kitchen Design project enables users to interactively design and visualize custom kitchens. By utilizing Three.js, the project allows real-time 3D rendering of kitchen layouts, where users can change the materials of the cabinets and instantly see how those changes impact the overall look of their kitchen."
              ghLink="https://rtastore.diydesignspace.com"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={solana}
              isBlog={false}
              title="Solana Giveaway"
              description="The Solana Giveaway project allows users to connect their Phantom wallet for participation in giveaways on the Solana blockchain. Built with React for the front-end, the application interacts with the Phantom wallet to securely connect users and allow them to participate by sending their information to the server."
              ghLink="https://saturnswaps.com"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={kv}
              isBlog={false}
              title="Kitchen Visualizer"
              description="Built with React for a seamless and responsive user interface, and powered by a Node.js and Express.js backend, this project efficiently handles user inputs and material selections. The intuitive design helps users visualize different material combinations, making it an ideal tool for anyone looking to redesign or plan their kitchen."
              ghLink="https://www.fabuwood.com/visualizer"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/kevinroberts1117/mern-blog-app"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="E-commerce Website"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/kevinroberts1117/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/kevinroberts1117/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects