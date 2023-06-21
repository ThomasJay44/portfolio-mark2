import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./style.css";

import { Clock, Blur } from "./Javascript30";

export default function Activities() {
  const componentOptions = [
    { name: "JavaScript 30 Clock", component: <Clock /> },
    { name: "JavaScript 30 Blur", component: <Blur />}
  ];

  const [selectedComponent, setSelectedComponent] = useState(<Clock />);

  const handleSelect = (eventKey) => {
    const selected = componentOptions[eventKey];
    setSelectedComponent(selected.component);
  };

  const handleReset = () => {
    setSelectedComponent(null);
  };

  return (
    <div className="activities">
      {/* <h1>Activities</h1> */}

      <section>
        <h2>JavaScript 30</h2>
        <p>
          I have been learning from the JavaScript 30 course by Wes Bos. It has been a great resource for improving my JavaScript skills. Through this course, I have learned various concepts and built interactive projects.
        </p>
        <p>
          You can explore the course and its projects on the <a href="https://javascript30.com/">JavaScript 30 website</a>.
        </p>
      </section>

      <section>
        <h2>Udemy</h2>
        <p>
          I have also been taking courses on Udemy to further expand my knowledge in web development. The courses have covered a wide range of topics including front-end frameworks, back-end development, and more.
        </p>
        <p>
          You can check out my Udemy profile and the courses I have completed on <a href="https://www.udemy.com/user/your-udemy-profile/">Udemy</a>.
        </p>
      </section>

      <section>
        <h2>NetNinja</h2>
        <p>
          NetNinja is another online resource that I have been utilizing to enhance my web development skills. The tutorials provided by NetNinja have been helpful in learning various web technologies and frameworks.
        </p>
        <p>
          You can find the tutorials by NetNinja on their <a href="https://www.thenetninja.co.uk/">website</a>.
        </p>
      </section>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navigation"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Select Activity"
                id="javascript-dropdown"
                onSelect={handleSelect}
              >
                {componentOptions.map((option, index) => (
                  <NavDropdown.Item key={index} eventKey={index}>
                    {option.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              
            </Nav>

            <Nav>
              <Nav.Link as={Link} onClick={handleReset}>Hide Activity</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {selectedComponent}
    </div>
  );
}
