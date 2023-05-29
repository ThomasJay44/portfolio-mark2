import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:thomasjaymaly@gmail.com";
  };

  return (
    <div className="contact container">
      <h4>Contact Me:</h4>

      <Row className="mb-3">
        <Col xs={6} sm={3} className="d-flex justify-content-center">
          <Button
            variant="twitter"
            href="https://twitter.com/your_twitter_username"
            className="flex-fill"
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </Button>
        </Col>

        <Col xs={6} sm={3} className="d-flex justify-content-center">
          <Button
            variant="instagram"
            href="https://instagram.com/your_instagram_username"
            className="flex-fill"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </Button>
        </Col>

        <Col xs={6} sm={3} className="d-flex justify-content-center">
          <Button
            variant="github"
            href="https://github.com/ThomasJay44"
            className="flex-fill"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </Button>
        </Col>

        <Col xs={6} sm={3} className="d-flex justify-content-center">
          <Button
            variant="linkedin"
            href="https://www.linkedin.com/in/thomas-maly-29825189/"
            className="flex-fill"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="d-flex justify-content-center">
          <Button
            variant="email"
            onClick={handleEmailClick}
            className="flex-fill"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </Button>
        </Col>
      </Row>
    </div>
  );
}
