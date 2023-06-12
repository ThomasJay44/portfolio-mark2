import React from "react";
import { Card, Container } from "react-bootstrap";
import { Res } from "../../Assets/Images";
import resumeFile from "../../Assets/MalyRes611.pdf";
import "./style.css";

export default function Resume() {
  return (
    <Container className="d-flex align-items-center justify-content-center h-100">
      <div>
        <h1 className="resume-heading">Resume</h1>
        <Card className="resume-card">
          <a href={resumeFile} download>
            <Card.Img src={Res} alt="Resume Screenshot" className="card-image" />
          </a>
        </Card>
      </div>
    </Container>
  );
}