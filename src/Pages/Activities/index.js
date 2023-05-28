import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./style.css";

import { Clock } from "./Javascript30";

export default function Activities() {
  const componentOptions = [{ name: "Clock", component: <Clock /> }
];

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelect = (eventKey) => {
    const selected = componentOptions[eventKey];
    setSelectedComponent(selected.component);
  };

  const handleReset = () => {
    setSelectedComponent(null);
  };

  return (
    <div className="activities">
      <h1>Activities</h1>
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
                title="Javascript30"
                id="collasible-nav-dropdown"
                onSelect={handleSelect}
              >
                {componentOptions.map((option, index) => (
                  <NavDropdown.Item eventKey={index}>
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
