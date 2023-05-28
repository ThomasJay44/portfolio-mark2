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
      <div>
        <Container>
          <Row>
            <h1>home body</h1>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img src={Bozz} alt="Bozz" />
            </Col>
            <Col xs={12} md={8}>
              <p>
                "Did you ever hear the tragedy of Darth Plagueis the Wise?"
                "No." "I thought not. It's not a story the Jedi would tell you.
                It's a Sith legend. Darth Plagueis... was a Dark Lord of the
                Sith so powerful and so wise, he could use the Force to
                influence the midi-chlorians... to create... life. He had such a
                knowledge of the dark side, he could even keep the ones he cared
                about... from dying." "He could actually... save people from
                death?" "The dark side of the Force is a pathway to many
                abilities... some consider to be unnatural." "Wh– What happened
                to him?" "He became so powerful, the only thing he was afraid of
                was... losing his power. Which eventually, of course, he did.
                Unfortunately, he taught his apprentice everything he knew. Then
                his apprentice killed him in his sleep. It's ironic. He could
                save others from death, but not himself." "Is it possible to
                learn this power?" "Not from a Jedi."
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
