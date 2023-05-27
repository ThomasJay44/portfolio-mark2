import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./style.css";
export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navigation">
      <Container>
        <Navbar.Brand as={Link} to="/">Thomas Jay Maly</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/clock">Activites</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            {/* <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/drumkit">Drumkit</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/clock">Clock</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/camera">Video</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>more to come!</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}