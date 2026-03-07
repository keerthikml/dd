import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/keerth.jpg";
import Tilt from "react-parallax-tilt";
import { DiCode, DiNodejs } from "react-icons/di";
import { SiSpringboot, SiReact, SiMysql, SiDocker, SiNginx, SiFirebase } from "react-icons/si";
import { FaBolt, FaCloud, FaServer } from "react-icons/fa";

const CAPABILITY_CARDS = [
  {
    icon: <FaServer size={36} />,
    title: "Backend Development",
    description: "Build scalable REST APIs and backend services using Spring Boot and Node.js.",
    techIcons: [
      { icon: <SiSpringboot size={20} className="tech-icon-wrapper" />, name: "Spring Boot" },
      { icon: <DiNodejs size={20} className="tech-icon-wrapper" />, name: "Node.js" },
    ],
    relatedWork: [
      { project: "HRMS Platform – TheDayHr", tech: "Spring Boot, JWT, REST APIs" },
      { project: "Internal Chat System", tech: "Node.js, WebSocket" },
    ],
  },
  {
    icon: <DiCode size={36} />,
    title: "Full Stack Applications",
    description: "Develop complete web applications using React, Spring Boot, and MySQL.",
    techIcons: [
      { icon: <SiReact size={20} className="tech-icon-wrapper" />, name: "React" },
      { icon: <SiSpringboot size={20} className="tech-icon-wrapper" />, name: "Spring Boot" },
      { icon: <SiMysql size={20} className="tech-icon-wrapper" />, name: "MySQL" },
    ],
    relatedWork: [
      { project: "HRMS Platform – TheDayHr", tech: "React, Spring Boot, MySQL" },
      { project: "TheDayHr Company Website", tech: "React, NGINX" },
    ],
  },
  {
    icon: <FaBolt size={36} />,
    title: "Real-Time Systems",
    description: "Implement real-time features using WebSocket and Firebase Cloud Messaging (FCM).",
    techIcons: [
      { icon: <SiFirebase size={20} className="tech-icon-wrapper" />, name: "Firebase FCM" },
    ],
    relatedWork: [
      { project: "Internal Chat System", tech: "WebSocket" },
      { project: "HRMS Platform – TheDayHr", tech: "FCM (notifications)" },
    ],
  },
  {
    icon: <FaCloud size={36} />,
    title: "DevOps & Deployment",
    description: "Deploy applications using Docker, NGINX, Linux VPS, and PM2.",
    techIcons: [
      { icon: <SiDocker size={20} className="tech-icon-wrapper" />, name: "Docker" },
      { icon: <SiNginx size={20} className="tech-icon-wrapper" />, name: "NGINX" },
    ],
    relatedWork: [
      { project: "TheDayHr Company Website", tech: "Linux VPS, NGINX" },
      { project: "Ishaanglobal Website", tech: "Docker, NGINX, PM2" },
    ],
  },
];

function Home2() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

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
              {CAPABILITY_CARDS.map((card, index) => (
                <Col
                  key={index}
                  md={6}
                  className="capability-card-col"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`capability-card ${expandedCard === index ? "capability-card-expanded" : ""}`}
                    onClick={() => handleCardClick(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleCardClick(index);
                      }
                    }}
                    aria-expanded={expandedCard === index}
                    aria-label={`${card.title}. Click to ${expandedCard === index ? "collapse" : "see projects using this skill"}`}
                  >
                    <div className="capability-icon">{card.icon}</div>
                    <h3 className="capability-title">{card.title}</h3>
                    <p className="capability-description">{card.description}</p>
                    <div className="capability-tech-icons">
                      {card.techIcons.map((item, i) => (
                        <span key={i} className="tech-icon-item">
                          {item.icon}
                          <span className="tech-icon-name">{item.name}</span>
                        </span>
                      ))}
                    </div>
                    <div className="capability-related-wrap">
                      <p className="capability-related-label capability-label-open">
                        Related projects
                      </p>
                      <p className="capability-related-label capability-label-tap-hint">
                        Tap to see related projects
                      </p>
                      <div
                        className="capability-related-list"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {card.relatedWork.map((item, i) => (
                          <div
                            key={i}
                            className="capability-related-item"
                            style={{ animationDelay: `${i * 0.12}s` }}
                          >
                            <span className="capability-related-project">{item.project}</span>
                            <span className="capability-related-tech">{item.tech}</span>
                          </div>
                        ))}
                        <Link
                          to="/project"
                          className="capability-related-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View all projects →
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
