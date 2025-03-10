import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KEVIN ROBERTS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", color : "#fff"}}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <iframe title="Animated Lottie" className="img-fluid" src="https://lottie.host/embed/0214992f-2621-4b07-b426-c10c3eb5db1d/f5Goo02AYq.lottie" style={{width : "100%", height : "100%"}}></iframe>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", filter: "grayscale(100%)"}}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}
export default Home