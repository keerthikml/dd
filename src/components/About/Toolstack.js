import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiLinux,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="800">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="800">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="800">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;