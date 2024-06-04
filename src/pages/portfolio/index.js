import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { meta } from "../../content_option";
import { dataportfolio } from "./portfolio";

export const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <img src={data.img} alt="" loading="lazy" />
              <div className="content">
                <p>{data.description}</p>
                <Button onClick={() => handleShow(data.details)}>
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <strong>Description:</strong>
            {selectedProject?.description.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <p>
              <strong>Impact:</strong>
              {selectedProject?.impact.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </p>
            <p>
              <strong>Technologies Used:</strong>
            </p>
            <ul className="stack-list">
              {selectedProject?.stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            {/* <img src={selectedProject?.img} alt="" className="img-fluid" /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};
