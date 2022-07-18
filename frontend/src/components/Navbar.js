import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "../style/images/avatar.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Style.css";
import jwtDecode from "jwt-decode";

const NavBar = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const data = response.data.accessToken;
      const decoded = jwtDecode(data);
      setName(decoded.name);
    } catch (error) {
      console.log(error.response);
    }
  };

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
              <Nav.Link href="dashboard" className="colorNav">
                Home
              </Nav.Link>
              <Nav.Link href="add" className="colorNav">
                Add Recipe
              </Nav.Link>
              <Nav.Link href="profile" className="colorNav">
                Profile
              </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <i className="fa fa-text-width colorNav m-2" aria-hidden="true">
                {name}
              </i>
              <Link to="/profile">
                {" "}
                <img
                  src={Avatar}
                  alt={"avatarIcon"}
                  width={30}
                  height={30}
                  className="rounded-circle"
                />
              </Link>

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
