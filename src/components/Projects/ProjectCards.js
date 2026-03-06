import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Card className="project-card-view">
        <div className="project-image-container">
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="card-img" 
            className="project-image" 
            onClick={handleShow}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleShow();
            }}
            style={{ cursor: "pointer" }}
          />
          <div className="project-image-message">
            Click to show image
          </div>
        </div>
        <Card.Body className="project-card-body">
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        {props.techStack && (
          <Card.Text className="project-tech-stack">
            <span className="tech-stack-label">Tech Stack:</span>
            {props.techStack}
          </Card.Text>
        )}

        {props.codeLabel && (
          <Card.Text className="project-code-label">
            {props.codeLabel}
          </Card.Text>
        )}

        {props.ghLink && (
          <>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}
          </>
        )}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        )}
      </Card.Body>
    </Card>

    <Modal 
      show={showModal} 
      onHide={handleClose} 
      centered 
      size="lg"
      className="project-image-modal"
    >
      <Modal.Header closeButton className="project-modal-header">
        <Modal.Title className="project-modal-title">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="project-modal-body">
        <img 
          src={props.imgPath} 
          alt={props.title} 
          className="project-modal-image"
        />
      </Modal.Body>
    </Modal>
    </>
  );
}
export default ProjectCards;
