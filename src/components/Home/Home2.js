import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Keerthik portfolio image.jpg";
import Tilt from "react-parallax-tilt";
import { DiCode, DiNodejs } from "react-icons/di";
import { SiSpringboot, SiReact, SiMysql, SiDocker, SiNginx, SiFirebase } from "react-icons/si";
import { FaBolt, FaCloud, FaServer } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="what-i-do-section" id="what-i-do">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 className="what-i-do-heading" data-aos="fade-up">
              What I <span className="purple">Do</span>
            </h1>
          </Col>
        </Row>
        <Row className="align-items-start">
          <Col md={4} lg={4} className="what-i-do-image-col" data-aos="fade-right">
            <div className="profile-section-wrapper">
              <div className="what-i-do-image-wrapper">
                <Tilt>
                  <img src={myImg} className="what-i-do-image" alt="keerthik" />
                </Tilt>
              </div>
              <div className="profile-tagline" data-aos="fade-up" data-aos-delay="200">
                <p className="tagline-text">
                  "Building robust backend systems that power seamless user experiences."
                </p>
              </div>
              <div className="profile-description" data-aos="fade-up" data-aos-delay="250">
                <p className="tagline-subtext">
                  Passionate about clean code, scalable architecture, and solving complex problems.
                </p>
              </div>
            </div>
          </Col>
          <Col md={8} lg={8} className="what-i-do-content" data-aos="fade-left">
            <Row className="capability-cards-row">
              <Col md={6} className="capability-card-col" data-aos="fade-up" data-aos-delay="0">
                <div className="capability-card">
                  <div className="capability-icon">
                    <FaServer size={36} />
                  </div>
                  <h3 className="capability-title">Backend Development</h3>
                  <p className="capability-description">
                    Build scalable REST APIs and backend services using Spring Boot and Node.js.
                  </p>
                  <div className="capability-tech-icons">
                    <SiSpringboot size={20} className="tech-icon-wrapper" />
                    <DiNodejs size={20} className="tech-icon-wrapper" />
                  </div>
                </div>
              </Col>
              <Col md={6} className="capability-card-col" data-aos="fade-up" data-aos-delay="100">
                <div className="capability-card">
                  <div className="capability-icon">
                    <DiCode size={36} />
                  </div>
                  <h3 className="capability-title">Full Stack Applications</h3>
                  <p className="capability-description">
                    Develop complete web applications using React, Spring Boot, and MySQL.
                  </p>
                  <div className="capability-tech-icons">
                    <SiReact size={20} className="tech-icon-wrapper" />
                    <SiSpringboot size={20} className="tech-icon-wrapper" />
                    <SiMysql size={20} className="tech-icon-wrapper" />
                  </div>
                </div>
              </Col>
              <Col md={6} className="capability-card-col" data-aos="fade-up" data-aos-delay="200">
                <div className="capability-card">
                  <div className="capability-icon">
                    <FaBolt size={36} />
                  </div>
                  <h3 className="capability-title">Real-Time Systems</h3>
                  <p className="capability-description">
                    Implement real-time features using WebSocket and Firebase Cloud Messaging (FCM).
                  </p>
                  <div className="capability-tech-icons">
                    <SiFirebase size={20} className="tech-icon-wrapper" />
                  </div>
                </div>
              </Col>
              <Col md={6} className="capability-card-col" data-aos="fade-up" data-aos-delay="300">
                <div className="capability-card">
                  <div className="capability-icon">
                    <FaCloud size={36} />
                  </div>
                  <h3 className="capability-title">DevOps & Deployment</h3>
                  <p className="capability-description">
                    Deploy applications using Docker, NGINX, Linux VPS, and PM2.
                  </p>
                  <div className="capability-tech-icons">
                    <SiDocker size={20} className="tech-icon-wrapper" />
                    <SiNginx size={20} className="tech-icon-wrapper" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
