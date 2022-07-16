import React  from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "../style/images/avatar.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Style.css";

const NavBar = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              <Nav.Link href="/dashboard" className="colorNav">
                Home
              </Nav.Link>
              <Nav.Link href="edit/:id" className="colorNav">
                Add Recipe
              </Nav.Link>
              <Nav.Link href="/profile" className="colorNav">
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
              <Link to="/login">
                <Button
                  variant="outline-primary"
                  className="ms-3 btn-sm btn-bar"
                  onClick={Logout}
                >
                  Logout
                </Button>
              </Link>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;
