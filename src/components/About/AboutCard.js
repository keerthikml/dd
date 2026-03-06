import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Keerthik M L </span>
            from{" "}
            <span className="no-wrap">
              Dakshina Kannada, Karnataka, India.
            </span>
            <br />
            <br />
            I am a <span className="purple">Backend Engineer</span> with 1+ year
            of experience building scalable backend systems and web applications.
            <br />
            <br />
            My core expertise includes{" "}
            <span className="purple">
              Java, Spring Boot, Node.js, REST API development, JWT-based
              authentication, and role-based access control (RBAC)
            </span>
            , with a strong focus on security and clean architecture.
            <br />
            <br />
            I have worked on real-world platforms such as an{" "}
            <span className="purple">HRMS system</span> that includes employee
            onboarding, GPS-based attendance tracking, leave management
            workflows, and real-time chat features.
            <br />
            <br />
            I also build real-time and notification-driven systems using{" "}
            <span className="purple">WebSocket</span> and{" "}
            <span className="purple">Firebase Cloud Messaging (FCM)</span>, and
            I work with <span className="purple">MySQL</span> for relational
            data storage.
            <br />
            <br />
            For frontend, I use <span className="purple">React.js</span> when
            needed, and I deploy applications on{" "}
            <span className="purple">Linux VPS</span> using{" "}
            <span className="purple">Docker, NGINX, and PM2</span> to ensure
            reliable, production-ready environments.
            <br />
            <br />
            I enjoy continuously learning new technologies and building backend
            systems that are scalable, reliable, and impactful for users and
            businesses.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Keerthik</footer>
        </blockquote>
      </Card.Body>
    </Card>





  );


}


   
      
  





export default AboutCard;
