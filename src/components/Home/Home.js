import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/design-home.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There <span className="wave">👋</span>
              </h1>

              <h1 className="heading-name">
                <span style={{ marginRight: 10 }}>I&apos;M</span>
                <strong className="main-name">KEERTHIK M L</strong>
              </h1>

              <div
                className="home-hero-subtitle"
                style={{ paddingTop: 12, paddingBottom: 12, textAlign: "left" }}
              >
                <div style={{ fontSize: "1.05rem", opacity: 0.95 }}>
                  Backend Engineer | Java Spring Boot | Node.js | React
                </div>
                <div style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.6 }}>
                  Backend Engineer with 1+ year of experience building scalable
                  backend systems using Java Spring Boot, Node.js, and MySQL.
                </div>
              </div>

              <div style={{ paddingTop: 14, textAlign: "left" }}>
                <Type />
              </div>

              <div
                className="d-flex flex-wrap align-items-center gap-3"
                style={{ paddingTop: 18 }}
              >
                <Button
                  variant="primary"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </Button>
                <Button
                  variant="outline-light"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"

                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
