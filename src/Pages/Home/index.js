import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

import { Bozz } from "../../Assets/Images";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <Container>
          <Row>
            <h1>Take Your Shoes Off, Stay awhile</h1>
          </Row>
        </Container>
      </div>
      <div className="content">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <img src={Bozz} alt="Bozz" />
            </Col>
            <Col xs={12} md={8}>
              <p>
                Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. 

                <br />

                Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction.

                <br />

                Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction. Welcome to my portfolio, it is under construction.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

