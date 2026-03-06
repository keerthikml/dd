import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={12}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
              data-aos="fade-up"
            >
              <h1 className="about-section-title">About Me</h1>
              <Aboutcard />
            </Col>
          </Row>

          <Row style={{ marginTop: "60px", marginBottom: "40px" }}>
            <Col md={12}>
              <h2 className="about-section-title" data-aos="fade-up">
                Experience & Education
              </h2>
            </Col>
          </Row>

          <Row className="experience-education-row">
            <Col md={6} className="experience-education-col" data-aos="fade-right">
              <div className="resume-card">
                <h3 className="resume-card-title">Experience</h3>
                <div className="resume-item">
                  <h4 className="resume-job-title">Backend Engineer</h4>
                  <p className="resume-company">VAIVAS Ventures — Bangalore</p>
                  <p className="resume-product">TheDayHr (HRMS Platform)</p>
                  <p className="resume-item-duration">Jan 2025 – Feb 2026</p>
                  <div className="resume-descriptions">
                    <p className="resume-description">
                      Developed backend services for an HRMS platform including employee onboarding, attendance tracking, and payslip generation using Spring Boot and MySQL.
                    </p>
                    <p className="resume-description">
                      Designed secure REST APIs with JWT authentication and role-based access control to support multi-tenant access.
                    </p>
                    <p className="resume-description">
                      Built a real-time chat backend using Node.js and WebSocket to enable instant communication between HRMS users.
                    </p>
                    <p className="resume-description">
                      Integrated Firebase Cloud Messaging (FCM) to deliver real-time push notifications and alerts.
                    </p>
                    <p className="resume-description">
                      Implemented GPS-based attendance validation using Google Maps API with location radius verification.
                    </p>
                    <p className="resume-description">
                      Deployed backend services on a Linux VPS using Docker, NGINX, and PM2.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="experience-education-col" data-aos="fade-left">
              <div className="resume-card">
                <h3 className="resume-card-title">Education</h3>
                <div className="resume-item">
                  <h4 className="resume-item-title">B.E – Computer Science & Engineering</h4>
                  <p className="resume-institute">Shree Devi Institute of Technology, Mangaluru</p>
                  <p className="resume-duration">2019 – 2023</p>
                  <p className="resume-grade">CGPA: 8.29</p>
                </div>
                <div className="resume-item" style={{ marginTop: "25px" }}>
                  <h4 className="resume-item-title">PUC – PCMC</h4>
                  <p className="resume-institute">SDM PU College, Ujire</p>
                  <p className="resume-duration">2017 – 2019</p>
                </div>
                <div className="resume-item" style={{ marginTop: "25px" }}>
                  <h4 className="resume-item-title">SSLC</h4>
                  <p className="resume-institute">St John's English Medium High School, Karnataka</p>
                  <p className="resume-duration">2016 – 2017</p>
                </div>
              </div>
            </Col>
          </Row>

          <h1 className="project-heading" data-aos="fade-up" style={{ marginTop: "60px" }}>
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading" data-aos="fade-up">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </motion.div>
  );
}

export default About;
