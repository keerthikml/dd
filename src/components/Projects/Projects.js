import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Vehicle from "../../Assets/Projects/Vehicle.png";
import Unit from "../../Assets/Projects/Unit.png";
import Tourism from "../../Assets/Projects/Tourism.png";
import Virtual from "../../Assets/Projects/Virtual.jpg";
import Spaceship from "../../Assets/Projects/Spaceship.jpg";
import HRMS from "../../Assets/Projects/HRMS.png";
import Chat from "../../Assets/Projects/Chat.png";
import TheDayHr from "../../Assets/Projects/TheDayHr.png";
import Ishaan from "../../Assets/Projects/Ishaan.png";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading" data-aos="fade-up">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <h2
          className="project-heading"
          style={{ marginTop: "30px" }}
          data-aos="fade-up"
        >
          Professional <strong className="purple">Experience</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <ProjectCard
              imgPath={HRMS}
              isBlog={false}
              title="HRMS Platform – TheDayHr"
              description="Developed backend services for an HRMS platform with employee onboarding, GPS-based attendance, leave workflows, and organization hierarchy. Implemented secure REST APIs with JWT authentication and role-based access control."
              techStack="Java | Spring Boot | React | MySQL | JWT | RBAC | Google Maps API | Firebase Cloud Messaging"
              // codeLabel="Code: Private Repository"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="Internal Chat System"
              description="Built a real-time chat backend enabling instant communication between HRMS users using WebSocket. Integrated securely with the HRMS platform using session-based authentication."
              techStack="Node.js | WebSocket | TypeScript | React"
              // codeLabel="Code: Private Repository"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ProjectCard
              imgPath={TheDayHr}
              isBlog={false}
              title="TheDayHr Company Website"
              description="Contributed to development and production deployment of the company website, configuring hosting on a Linux VPS with NGINX for reliable performance."
              techStack="React | JavaScript | Linux VPS | NGINX"
              demoLink="https://thedayhr.com"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ProjectCard
              imgPath={Ishaan}
              isBlog={false}
              title="Ishaanglobal Website Deployment"
              description="Deployed and configured the company website on a Linux VPS using Docker, NGINX, and PM2, ensuring stable production hosting and optimized performance."
              techStack="Linux VPS | Docker | NGINX | PM2"
              demoLink="https://ishaanglobal.com"
            />
          </Col>
        </Row>

        <h2
          className="project-heading"
          style={{ marginTop: "20px" }}
          data-aos="fade-up"
        >
          Personal <strong className="purple">Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <ProjectCard
              imgPath={Tourism}
              isBlog={false}
              title="Tourism Management System"
              description="Web-based system to manage tour packages, bookings, and customer details in a single portal. Admins can create and manage tour packages and view booking information."
              techStack="PHP | MySQL | HTML | CSS | JavaScript"
              // ghLink="https://github.com/keerthikml/Tourism_Management_System_Using_PHP.git"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ProjectCard
              imgPath={Spaceship}
              isBlog={false}
              title="SpaceShip Shooting Game"
              description="2D shooting game where the player controls a spaceship to avoid enemy fire and destroy opponents using keyboard controls."
              techStack="C | OpenGL | Visual Studio"
              // ghLink="https://github.com/keerthikml/SpaceShip_Shooting_Game.git"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ProjectCard
              imgPath={Vehicle}
              isBlog={false}
              title="Vehicle Care Center"
              description="Django-based web application that lets customers book vehicle maintenance and repair appointments online and track upcoming services."
              techStack="Python | Django | SQLite | HTML | CSS"
              // ghLink="https://github.com/keerthikml/Vehicle_care_center_using_django"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ProjectCard
              imgPath={Virtual}
              isBlog={false}
              title="Virtual Fitting Room"
              description="Virtual fitting room concept that lets users preview how clothing would look using AR, body detection, and motion tracking."
              techStack="Flask | JavaScript | Machine Learning | Python | CSS | HTML"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <ProjectCard
              imgPath={Unit}
              isBlog={false}
              title="Unit Converter App"
              description="Android app to quickly convert between multiple measurement units such as length, weight, temperature, and more."
              techStack="Java | Android | Android Studio"
              ghLink="https://github.com/keerthikml/Unit-converter-android-app"
            />
          </Col>
        </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Projects;
