import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "../style/images/avatar.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';
import "../style/Style.css";
import { BiLogIn} from 'react-icons/bi';

const NavbarHome = () => {
 

  return (
    <Container>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 myColor"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="colorNav">
                Home
              </Nav.Link>
              <Nav.Link href="#action1" className="colorNav">
                Add Recipe
              </Nav.Link>
              <Nav.Link href="#action2" className="colorNav">
                Profile
              </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <img
                src={Avatar}
                alt={"avatarIcon"}
                width={30}
                height={30}
                className="rounded-circle"
              />
              <NavDropdown title="Guest" id="basic-nav-dropdown"  className="colorNav">
                <NavDropdown.Item href="/">About</NavDropdown.Item>
                <NavDropdown.Divider />
                <Button variant="dark" className="button-logout" href="/login">Login<BiLogIn/></Button>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavbarHome;
