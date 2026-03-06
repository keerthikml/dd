import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiDocker,
  SiFirebase,
  SiMysql,
  SiNginx,
  SiSpringboot,
} from "react-icons/si";

function Techstack() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="800">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="800">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="800">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="800">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="350" data-aos-duration="800">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-delay="450" data-aos-duration="800">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
