import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import "./style.css";

export default function Navigation() {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navigation">
      <Container>
        <Navbar.Brand as={Link} to="/">Thomas Jay Maly</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={scrollToBottom}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
