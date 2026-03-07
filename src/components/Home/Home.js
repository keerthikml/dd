import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="home-page-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row className="justify-content-center align-items-center">
              <Col md={8} className="home-header text-center">
                <h1
                  style={{ paddingBottom: 15 }}
                  className="heading"
                  data-aos="fade-down"
                >
                Hi There <span className="wave">👋</span>
              </h1>

              <h1 className="heading-name" data-aos="fade-down" data-aos-delay="100">
                <span style={{ marginRight: 10 }}>I&apos;M</span>
                <strong className="main-name">KEERTHIK M L</strong>
              </h1>

              <div
                className="home-hero-subtitle"
                style={{
                  paddingTop: 16,
                  paddingBottom: 16,
                }}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div style={{ fontSize: "1.05rem", opacity: 0.95 }}>
                  Backend Engineer | Java Spring Boot | Node.js | React
                </div>
                <div style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.6 }}>
                  Backend Engineer with 1+ year of experience building scalable
                  backend systems using Java Spring Boot, Node.js, and MySQL.
                </div>
              </div>

              <div
                className="typing-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Type />
              </div>

              <div
                className="d-flex flex-wrap align-items-center gap-3 home-buttons-wrapper"
                style={{
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 10
                }}
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <Button
                  as={Link}
                  to="/resume"
                  variant="primary"
                  style={{ position: "relative", zIndex: 10, pointerEvents: "auto" }}
                >
                  View Resume
                </Button>
                <a 
                  href="mailto:keerthiksowthadka@gmail.com" 
                  className="btn btn-outline-light"
                  style={{ position: "relative", zIndex: 10, pointerEvents: "auto", textDecoration: "none" }}
                >
                  Email Me
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      </motion.div>
      <Home2 />
    </section>
  );
}

export default Home;
