import React from "react";
import { projects } from "./porjectsArray";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "./style.css";


export default function Projects() {
  return (
    <div className="projects"> 
      <Container>
        <Row>
          <Col>
            <h3 id="portHeader">Here Are Some Of My Recent Projects</h3>
          </Col>
        </Row>

        <Row>
          {projects.map((project) => (
            <Col key={project.id} className="text-center project-col" md={6} lg={4}>
              <div className="project-card">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a>{project.tech}</a>
                <a href={project.repoLink}>
                  <img
                    className="img-fluid projPictures"
                    src={project.ss}
                    alt={project.alt}
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}
