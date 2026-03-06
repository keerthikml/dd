import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/keerthik.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Backend Engineer</b> with 1+ year of
              experience building scalable web applications.
              <br />
              <br />
              I specialize in backend development using{" "}
              <b className="purple">Java Spring Boot</b> and{" "}
              <b className="purple">Node.js</b>, designing secure{" "}
              <b className="purple">REST APIs</b>, authentication systems, and{" "}
              <b className="purple">role-based access control (RBAC)</b>.
              <br />
              <br />
              I have worked on real-world systems like <b className="purple">HRMS</b>{" "}
              platforms with modules such as employee onboarding, GPS-based
              attendance, leave management workflows, and real-time chat.
              <br />
              <br />
              I also build real-time features using{" "}
              <b className="purple">WebSocket</b> and{" "}
              <b className="purple">Firebase Cloud Messaging (FCM)</b> for
              notifications.
              <br />
              <br />
              In addition to backend work, I use <b className="purple">React.js</b>{" "}
              for frontend development when needed, and I deploy applications on{" "}
              <b className="purple">Linux</b> servers using{" "}
              <b className="purple">Docker</b>, <b className="purple">NGINX</b>, and{" "}
              <b className="purple">PM2</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="keerthik" />
            </Tilt>
          </Col>
        </Row>
        
        



        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/keerthikml"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MlKeerthik?t=_SroC8bZoAyycmYQwH5zCQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/keerthik-ml-8856a6253/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/keerthik_ml?igshid=MzNlNGNkZWQ4Mg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
